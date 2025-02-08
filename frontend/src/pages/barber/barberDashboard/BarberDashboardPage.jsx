import React from 'react';
import BarberDashboard from './../../../components/barber/barberDashboard/BarberDashboard';
import Header from '../../../components/common/header/Header';
import SideDrawer from '../../../components/common/sidedrawer/SideDrawer';

const BarberDashboardPage = () => {
    return (
        <div>
            <Header role={"barber"} />
            <SideDrawer role={"barber"} />
            <BarberDashboard />
        </div>
    );
}

export default BarberDashboardPage;


