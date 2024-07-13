import { buttonVariants } from "@/components/ui/button";
import UserAuthentication from "@/components/UserAuthentication";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="absolute inset-0 bg-slate-900">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20 text-slate-300 hover:text-slate-100 hover:bg-slate-800"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Home
        </Link>

        <SignIn />
      </div>
    </div>
  );
}

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-100">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto text-slate-400">
          By continuing, you are setting up a bitSafe account and agree
          to our User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthentication />
      <p className="px-8 text-center text-sm text-slate-400">
        New to bitSafe?{" "}
        <Link
          href="/register"
          className="hover:text-cyan-400 text-slate-300 text-sm underline underline-offset-4 transition-colors"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};