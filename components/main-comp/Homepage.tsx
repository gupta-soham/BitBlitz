// import { Rubik } from "next/font/google";
// import { Chivo } from "next/font/google";

// Rubik({
//   subsets: ["latin"],
//   display: "swap",
// });

// Chivo({
//   subsets: ["latin"],
//   display: "swap",
// });

import { getAuthSession } from "@/lib/auth";
import Content from "./Content";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

export async function HomePage() {
  const session = await getAuthSession();

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <Content />
    </div>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
