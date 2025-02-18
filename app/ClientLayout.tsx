'use client';

import { useState } from "react";
import Topbar from "./component/Bar/Topbar";
import Sidebar from "./component/Bar/Sidebar";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(prev => {
        console.log("Sidebar toggled:", !prev);
        return !prev;
      });
    };

    const pathname = usePathname();
    const isAuthPage = pathname === '/login' || pathname === '/register' || pathname === '/medicament';

  
    return (
      <>
         {!isAuthPage && <Topbar toggleSidebar={toggleSidebar} />}
        <div className="flex">
          {!isAuthPage && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
          <main className={`flex-1 ${!isAuthPage ? 'pl-64' : ''}`}>
            {children}
          </main>
        </div>
        {/* <Topbar  />
        <Sidebar />
        <main>{children}</main> */}
      </>
    );
  }