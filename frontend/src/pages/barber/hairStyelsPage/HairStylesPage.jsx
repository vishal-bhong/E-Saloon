import React from 'react';
import Header from '../../../components/common/header/Header';
import SideDrawer from '../../../components/common/sidedrawer/SideDrawer';
import HairStyles from '../../../components/barber/hairStyles/HairStyles';

const HairStylesPage = () => {
    return (
        <div>
            <Header role={"barber"} />
            <SideDrawer role={"barber"} />
            <HairStyles />
        </div>
    );
}

export default HairStylesPage;