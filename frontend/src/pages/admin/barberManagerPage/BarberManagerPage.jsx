import React from 'react';
import Header from '../../../components/common/header/Header';
import SideDrawer from '../../../components/common/sidedrawer/SideDrawer';
import BarberManager from '../../../components/admin/barberManager/BarberManager';

const BarberManagerPage = () => {
    return (
        <div>
            <Header role={"admin"} />
            <SideDrawer role={"admin"} />
            <BarberManager />
        </div>
    );
}

export default BarberManagerPage;


