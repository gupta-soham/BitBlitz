import { Bolt, Gauge, ShieldCheck, Github } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Content() {
  return (
    <main className="flex-1 mx-auto shadow-custom-dark border border-slate-900">
      <section className="bg-background md:py-32 p-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get to know your Vulnerabilities
            </h1>
            <p className="text-muted-foreground text-lg">
              Perform, Store, and Securely manage Historical analysis Data
              through this web application.
            </p>
            <div className="flex gap-4">
              <Link href="/dashboard">
                <Button>Get Started</Button>
              </Link>
              <Link href="#learn-more">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={"/file.png"}
              width={600}
              height={400}
              alt="Volatility Framework"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24 p-10">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Gauge className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Advanced Analytics</h3>
            <p className="text-muted-foreground">
              Our web application provides with deeper analysis of the memory
              dump files and provides insights on analyzed data.
            </p>
          </div>
          <div className="space-y-4">
            <Bolt className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Secure</h3>
            <p className="text-muted-foreground">
              Your data is not stored with us. It is only utilised while being
              processed for the scanning.
            </p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Historical Analysis</h3>
            <p className="text-muted-foreground">
              You can access the analyses of previous scans and their respective
              results easily from your dashboard along with other features.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background py-16 md:py-24 p-10" id="learn-more">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/volatality.png"
              width={600}
              height={400}
              alt="Volatility Framework"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Based on{" "}
              <span className="bg-gradient-to-r from-red-500 text-black">
                &nbsp;Volatility 3&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The Volatility Framework is an advanced open-source memory
              forensics tool used to analyze RAM dumps and investigate malicious
              activity across Windows, Linux, and macOS. It provides plugins to
              extract digital artifacts from memory, aiding in processes,
              network connections, and registry analysis. Widely used in
              cybersecurity, it's essential for incident response and malware
              analysis.
            </p>
            <div className="flex gap-4 pt-10">
              <Link
                href="https://github.com/volatilityfoundation/volatility3"
                className="flex flex-row"
                target="_blank"
              >
                <Button variant="outline" className="p-10">
                  <Github className="w-10 h-10" />
                  <p className="text-white pl-5 text-3xl hover:text-black">
                    Github
                  </p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-20"></div>
      </section>
    </main>
  );
}
