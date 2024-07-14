import { Bricolage_Grotesque } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Navbar } from "@/components/main-comp/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/main-comp/Footer";

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-slate-900 text-slate-100 antialiased dark",
      )}
    >
      <body
        className={cn(
          "min-h-screen bg-slate-900 antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <Navbar />

        {children}

        <Footer />
        
        <Toaster />
      </body>
    </html>
  );
}
