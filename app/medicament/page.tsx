import React from 'react';
import AddForm from '../component/Medicament/AddForm';
import InventoryPage from "@/app/component/Medicament/InventoryPage";
import Topbar from "@/app/component/Bar/Topbar";
import Sidebar from "@/app/component/Bar/Sidebar";
import Dashboard from "@/app/dashboard/dashboard";

const AddPage = () => {
    return (
        <div>
            <div>

                <Topbar/>
                <div style={{display: 'flex'}}>
                    <Sidebar/>
                    <div style={{flex: 1, padding: 0}}>
                        <InventoryPage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPage;