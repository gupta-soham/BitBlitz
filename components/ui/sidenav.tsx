"use client";
import { useState } from "react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-full md:flex">
      {/* Top Nav for mobile */}
      <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-popover p-4 md:hidden">
        <div className="text-white">Dashboard</div>
        <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Side Nav */}
      <div
        className={`absolute top-16 left-0 z-40 flex-col w-full bg-background px-3 py-4 px-10 md:relative md:top-0 md:w-auto md:flex ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        <Link
          className="mb-2 flex h-20 items-end justify-start bg-background p-4 md:h-1/3"
          href="/dashboard"
        >
          <div className="w-32 text-white md:w-40 text-3xl flex hover:text-accent">
            Dashboard
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <div>
            <form className="flex flex-col h-full">
              {/* <Link href="/" className="mb-2 flex items-end justify-start p-4">
                Home <HomeIcon size={20} />
              </Link> */}

              <Link
                href="/dashboard/memory_scan"
                className="mb-2 flex items-end justify-start p-4"
              >
                <span className="hover:text-accent">Memory Process Scan</span>
              </Link>
              <Link
                href="/dashboard/his_analytics"
                className="mb-2 flex items-end justify-start p-4"
              >
                <span className="hover:text-accent">Historical Analytics</span>
              </Link>
              <Link
                href="/dashboard/mal_detected"
                className="mb-2 flex items-end justify-start p-4"
              >
                <span className="hover:text-accent">Malware Detected</span>
              </Link>
              <Link
                href="/dashboard/res_usage"
                className="mb-2 flex items-end justify-start p-4"
              >
                <span className="hover:text-accent">Resource Usage</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
