"use client"
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function LogoutHamburger() {
  return (
    <Link
      href="/"
      className={`cursor-pointer ${buttonVariants({
        variant: "destructive",
      })}flex items-center gap-2 text-lg font-medium text-white`}
      prefetch={false}
      onClick={(e) => {
        e.preventDefault();
        signOut({
          callbackUrl: `${window.location.origin}/login`,
        });
      }}
    >
      <LogOut className="h-5 w-5 text-muted-foreground" />
      Sign Out
    </Link>
  );
}
