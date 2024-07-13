import ProfileImage from "@/components/ProfileImage";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  LogIn,
  Menu,
  Mountain,
  Upload,
  UserRoundPlus,
} from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import LogoutHamburger from "./logout-hamburger";

export async function Navbar() {
  const session = await getAuthSession();

  return (
    <header className="sticky top-0 z-50 bg-slate-800/50 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-slate-100"
            prefetch={false}
          >
            <Mountain className="w-6 h-6" />
            <span className="hidden sm:block">bitSafe</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-base font-medium">
            <Link
              href="/dashboard"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="/upload"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
              prefetch={false}
            >
              Upload File
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden bg-slate-700 border-slate-600 hover:bg-slate-600"
              >
                <Menu className="h-6 w-6 text-slate-300" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="bg-slate-800/80 backdrop-blur-lg border-r border-slate-700"
            >
              <nav className="grid gap-4 py-6">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                  prefetch={false}
                >
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/upload"
                  className="flex items-center gap-2 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                  prefetch={false}
                >
                  <Upload className="h-5 w-5" />
                  Upload
                </Link>

                {session?.user ? (
                  <LogoutHamburger />
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="flex items-center gap-2 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                      prefetch={false}
                    >
                      <LogIn className="h-5 w-5" />
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="flex items-center gap-2 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                      prefetch={false}
                    >
                      <UserRoundPlus className="h-5 w-5" />
                      Register
                    </Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>

          {session?.user ? (
            <ProfileImage user={session.user} />
          ) : (
            <div className={cn("flex items-center gap-4 hidden md:flex")}>
              <Button
                variant="outline"
                size="sm"
                className="bg-slate-700 border-slate-600 hover:bg-slate-600 text-slate-300"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                size="sm"
                className="bg-cyan-600 hover:bg-cyan-500 text-slate-100"
              >
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
