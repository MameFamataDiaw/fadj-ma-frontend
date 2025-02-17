import React from 'react';
import Sidebar from '@/app/component/Bar/Sidebar'
import Topbar from "@/app/component/Bar/Topbar";
import InventoryPage from "@/app/component/Medicament/InventoryPage";

const ListPage = () => {
    return (
        <div>
            <div>
                <Topbar/>
                <div>
                    <Sidebar/>
                    <div>
                        <InventoryPage/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPage;