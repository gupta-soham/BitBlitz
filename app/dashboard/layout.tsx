import SideNav from "@/components/ui/sidenav";
import { Navbar } from "@/components/main-comp/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden justify-center">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 no-scrollbar">
          {children}
        </div>
      </div>
    </>
  );
}
