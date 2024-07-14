"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Upload, XIcon, FileIcon, CheckCircleIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface FileWithProgress extends File {
  progress: number;
}

interface FileUploadClientProps {
  userId: string | null;
}

export default function FileUploadClient({ userId }: FileUploadClientProps) {
  const [file, setFile] = useState<FileWithProgress | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const droppedFile = acceptedFiles[0];
    if (droppedFile && droppedFile.name.endsWith('.7z')) {
      const newFile = Object.assign(droppedFile, {
        progress: 0,
      }) as FileWithProgress;
      setFile(newFile);
    } else {
      toast({
        title: "Invalid file",
        description: "Please upload a .7z file.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'application/x-7z-compressed': ['.7z'],
    },
  });

  const handleUpload = async () => {
    if (!file || !userId) return;

    setIsUploading(true);
    try {
      const result = await uploadFile(file);
      toast({
        title: "Upload successful",
        description: `${file.name} uploaded successfully!`,
        action: (
          <ToastAction altText="Go to analyze page" onClick={() => router.push('/analyze')}>
            Analyze
          </ToastAction>
        ),
      });
      router.push(`/analyze?fileId=${result.fileId}`);
    } catch (error) {
      console.error("Upload error:", error);
      toast({
        title: "Upload failed",
        description: `Failed to upload ${file.name}`,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const uploadFile = async (file: File) => {
    return new Promise<{ fileId: string }>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64String = reader.result as string;

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/memory-dump?userId=${userId}&name=${encodeURIComponent(file.name)}`,
            {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ file: base64String }),
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const result = await response.json();
          if (result.status !== "success") {
            throw new Error(result.message || "Upload failed");
          }

          setFile((prev) => ({
            ...prev!,
            progress: 100,
          }));

          resolve({ fileId: result.fileId });
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = (error) => {
        reject(new Error("Failed to read file"));
      };
    });
  };

  const handleCancelUpload = () => {
    setFile(null);
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-background rounded-xl border p-6 w-full max-w-md flex flex-col gap-4">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">Upload Memory Dump</h2>
          <p className="text-muted-foreground">
            Drag and drop your .7z file here or click to browse.
          </p>
        </div>
        <div
          {...getRootProps()}
          className={`bg-muted rounded-xl border-2 border-dashed border-muted-foreground flex flex-col items-center justify-center gap-2 p-8 transition-colors ${
            isDragActive
              ? "border-primary bg-muted/50"
              : "hover:border-primary hover:bg-muted/50"
          }`}
        >
          <Upload className="w-8 h-8 text-muted-foreground" />
          <p className="text-muted-foreground">
            {isDragActive
              ? "Drop the .7z file here"
              : "Drag & drop .7z file here or click to browse"}
          </p>
          <input {...getInputProps()} />
        </div>
        {file && (
          <div className="space-y-2">
            <div
              key={file.name}
              className="flex items-center gap-2 bg-muted p-2 rounded-lg"
            >
              <FileIcon className="w-4 h-4 text-muted-foreground" />
              <span className="flex-1 truncate">{file.name}</span>
              <Progress
                value={file.progress}
                className="w-20 h-2 rounded-full"
              />
              {file.progress === 100 ? (
                <CheckCircleIcon className="w-4 h-4 text-green-500" />
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCancelUpload}
                  className="rounded-full"
                  disabled={isUploading}
                >
                  <XIcon className="w-4 h-4 text-muted-foreground" />
                  <span className="sr-only">Cancel upload</span>
                </Button>
              )}
            </div>
            <Button
              onClick={handleUpload}
              disabled={isUploading || !userId}
              className="w-full"
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}