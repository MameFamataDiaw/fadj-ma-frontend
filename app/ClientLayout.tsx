'use client';

import { useState } from "react";
import Topbar from "./component/Bar/Topbar";
import Sidebar from "./component/Bar/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(prev => {
        console.log("Sidebar toggled:", !prev);
        return !prev;
      });
    };
  
    return (
      <>
        <Topbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main>{children}</main>
      </>
    );
  }