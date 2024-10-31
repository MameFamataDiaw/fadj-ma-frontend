import React from 'react';
import Sidebar from '@/app/component/Bar/Sidebar'
import Topbar from "@/app/component/Bar/Topbar";
import InventoryPage from "@/app/component/Medicament/InventoryPage";

const ListPage = () => {
    return (
        <div>
            <div>
                <Topbar/>
                <div style={{display: 'flex'}}>
                    <Sidebar/>
                    <div style={{flex: 1, padding: 0}}>
                        <InventoryPage/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPage;