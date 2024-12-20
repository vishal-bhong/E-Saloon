// import { useState } from "react";
import Header from "../../../components/common/header/Header";
// import SideDrawer from "../../../components/common/sideDrawer/SideDrawer";
import CustomerProfile from "../../../components/customer/customerProfile/CustomerProfile"
import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";

const MyProfilePage = () => {
    // const [drawerOpen, setDrawerOpen] = useState(false);

    // const toggleDrawer = () => {
    //   setDrawerOpen(!drawerOpen);
    // };

    // const customerMenuItems = [
    //     'My Profile',
    //     'My Appointments',
    //     'Notifications',
    //     'Feedback',
    //     'Contact Us',
    //   ];

    return (
        <>
        <Header role="customer"/>
        <SideDrawer />
            {/* <SideDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} menuItems={customerMenuItems}/> */}
            {/* <main className={`${drawerOpen ? 'drawer-open' : ''}`}> */}
                <div className="d-flex justify-content-center">
                    <CustomerProfile />
                </div>
            {/* </main>       */}
        </>
    )
}

export default MyProfilePage