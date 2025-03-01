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
        // useEffect(() => {
        //     const token = localStorage.getItem("authToken");
        //     if (!token) {
        //         router.push("/login"); // Redirige si l'utilisateur n'est pas authentifié
        //     }
        // }, []);

    <div>

          <div> 

              <div>
                  <Dashboard />
                  {/*<InventoryPage />*/}
              </div>
          </div>
      </div>
  );
}
