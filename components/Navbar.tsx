import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { getAuthSession } from "@/lib/auth";
import ProfileImage from "@/components/ProfileImage";


export async function Navbar() {
  const session = await getAuthSession();

  return (
    <header className="bg-card border-b border-card-border px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-xl font-bold" prefetch={false}>
          Crypt
        </Link>

        <nav className="hidden md:flex pl-3 items-center gap-4 text-base font-medium ">
          <Link href="#" className="hover:text-cyan-400" prefetch={false}>
            Communities
          </Link>
          <Link href="#" className="hover:text-cyan-400" prefetch={false}>
            Trending
          </Link>
          <Link href="#" className="hover:text-cyan-400" prefetch={false}>
            Create
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-5">

        <Button variant="ghost" size="icon">
          <Search className="w-6 h-6" />
          <span className="sr-only">Search</span>
        </Button>

        <Button variant="ghost" size="icon">
          <Bell className="w-6 h-6" />
          <span className="sr-only">Notifications</span>
        </Button>

        {session?.user ? (
          <ProfileImage user={session.user} />
        ) : (
          <Link href="/login" className={buttonVariants()}>
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
