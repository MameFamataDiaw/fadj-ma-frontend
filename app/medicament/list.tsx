import React from 'react';
import Sidebar from '@/app/component/Bar/Sidebar'
import InventoryPage from '../component/Medicament/InventoryPage';

const ListPage = () => {
    return (
        <div>
            <Sidebar />
            <InventoryPage />
        </div>
    );
};

export default ListPage;