import { Bolt, Gauge, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

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
              Our cutting-edge framework empowers you to navigate the
              ever-changing financial landscape with precision and confidence.
            </p>
            <div className="flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/placeholder.svg"
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
              Gain deep insights into market trends and volatility patterns with
              our powerful analytics tools.
            </p>
          </div>
          <div className="space-y-4">
            <Bolt className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Rapid Deployment</h3>
            <p className="text-muted-foreground">
              Quickly integrate our framework into your existing systems and
              start leveraging its capabilities.
            </p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Robust Security</h3>
            <p className="text-muted-foreground">
              Trust our secure and reliable platform to protect your data and
              ensure compliance.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-background py-16 md:py-24 p-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/placeholder.svg"
              width={600}
              height={400}
              alt="Volatility Framework"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get to know your Vulnerabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Our cutting-edge framework empowers you to navigate the
              ever-changing financial landscape with precision and confidence.
            </p>
            <div className="flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24 p-10">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Gauge className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Advanced Analytics</h3>
            <p className="text-muted-foreground">
              Gain deep insights into market trends and volatility patterns with
              our powerful analytics tools.
            </p>
          </div>
          <div className="space-y-4">
            <Bolt className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Rapid Deployment</h3>
            <p className="text-muted-foreground">
              Quickly integrate our framework into your existing systems and
              start leveraging its capabilities.
            </p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold">Robust Security</h3>
            <p className="text-muted-foreground">
              Trust our secure and reliable platform to protect your data and
              ensure compliance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
