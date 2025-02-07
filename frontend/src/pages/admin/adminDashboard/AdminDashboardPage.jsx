import React from 'react';
import Header from '../../../components/common/header/Header';
import SideDrawer from '../../../components/common/sidedrawer/SideDrawer';
import AdminDashboard from '../../../components/admin/adminDashBoard/AdminDashboard';

const AdminDashboardPage = () => {
    return (
        <div>
            <Header role={"barber"} />
            <SideDrawer />
            <AdminDashboard />
        </div>
    );
}

export default AdminDashboardPage;


