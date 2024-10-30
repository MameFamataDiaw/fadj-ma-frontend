'use client'
import { useRouter } from "next/navigation";
import Dashboard from "./dashboard/dashboard"
import Topbar from "./component/Bar/Topbar"
import SideBar from '@/app/component/Bar/Sidebar'
import InventoryPage from "@/app/component/Medicament/InventoryPage";

export default function Home() {
  const router = useRouter();
  // const { pathname} = router


  return (
      <div>

          <Dashboard />
          {/*<Topbar />*/}
          {/*<div style={{ display: 'flex' }}>*/}
          {/*    /!*<SideBar />*!/*/}
          {/*    <div style={{ flex: 1, padding: '20px' }}>*/}
          {/*        */}
          {/*        /!*<InventoryPage />*!/*/}
          {/*    </div>*/}
          {/*</div>*/}
      </div>
  );
}
