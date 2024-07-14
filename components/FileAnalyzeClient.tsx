'use client';

import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const FormSchema = z.object({
  file: z.string({
    required_error: "Please select a file.",
  }),
  plugin: z.string({
    required_error: "Please select a plugin.",
  }),
});

const plugins = [
  { label: "List Registry Hives", value: "hiveList" },
  { label: "Retrieve Command Lines", value: "cmdLine" },
  { label: "Scan Network Connections", value: "netScan" },
  { label: "Find Malware", value: "malfind" },
  { label: "List Processes", value: "psList" }
];

interface FileAnalyzeClientProps {
  userId: string | null;
}

export default function FileAnalyzeClient({ userId }: FileAnalyzeClientProps) {
  const [files, setFiles] = useState([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();

  useEffect(() => {
    const fetchFiles = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/files?userId=${userId}`);
        const data = await response.json();

        if (data.status === "success") {
          setFiles(data.files.map((file: string) => ({ label: file, value: file })));
        } else if (data.status === "no_files_uploaded") {
          setFiles([]);
        }
      } catch (error) {
        console.error('Error fetching files:', error);
        toast({
          title: "Error",
          description: "Failed to fetch files.",
          variant: "destructive",
        });
      }
    };

    fetchFiles();
  }, [userId, toast]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileId: data.file, plugin: data.plugin, userId }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Analysis Started",
          description: `Analysis with ID ${result.analysisId} has started.`,
        });
      } else {
        toast({
          title: "Error",
          description: result.message || "An error occurred.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast({
        title: "Error",
        description: "An error occurred while starting the analysis.",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>File</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? files.find((file) => file.value === field.value)?.label
                        : "Select file"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search file..." />
                    <CommandEmpty>No file found.</CommandEmpty>
                    <CommandGroup>
                      {files.map((file) => (
                        <CommandItem
                          value={file.label}
                          key={file.value}
                          onSelect={() => {
                            form.setValue("file", file.value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              file.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {file.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the file to use for analysis.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="plugin"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Plugin</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? plugins.find((plugin) => plugin.value === field.value)?.label
                        : "Selugin"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search plugin..." />
                    <CommandEmpty>No plugin found.</CommandEmpty>
                    <CommandGroup>
                      {plugins.map((plugin) => (
                        <CommandItem
                          value={plugin.label}
                          key={plugin.value}
                          onSelect={() => {
                            form.setValue("plugin", plugin.value);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              plugin.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {plugin.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                Select the plugin to use for analysis.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
