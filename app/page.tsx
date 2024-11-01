'use client'
import { useRouter } from "next/navigation";
import Dashboard from "./dashboard/dashboard"
import InventoryPage from "@/app/component/Medicament/InventoryPage";
import Topbar from "@/app/component/Bar/Topbar";
import Sidebar from "@/app/component/Bar/Sidebar";
import {useEffect} from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/login');
        }
    }, [router]);

    return (
      <div>

          <Topbar />
          <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flex: 1, padding: 0 }}>
                  <Dashboard />
                  {/*<InventoryPage />*/}
              </div>
          </div>
      </div>
  );
}
