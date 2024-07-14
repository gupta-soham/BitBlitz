import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IsAuthorizedProps {
  children: ReactNode;
}

export default async function IsAuthorized({ children }: IsAuthorizedProps) {
  const session = await getAuthSession();

  if (!session) {
    redirect("/login");
  }

  return <>{children}</>;
}
