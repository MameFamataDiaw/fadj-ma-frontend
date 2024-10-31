import React from 'react';
import Sidebar from '@/app/component/Bar/Sidebar'
import InventoryPage from '../component/Medicament/InventoryPage';
import Topbar from "@/app/component/Bar/Topbar";

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