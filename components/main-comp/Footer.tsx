import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t mt-20">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <p className="text-muted-foreground text-sm flex items-center justify-center">
          &copy; 2024 bitSafe. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/tos"
            className="text-muted-foreground text-sm hover:underline"
            prefetch={false}
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-muted-foreground text-sm hover:underline"
            prefetch={false}
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
