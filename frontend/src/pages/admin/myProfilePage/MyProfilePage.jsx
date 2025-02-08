// import { useState } from "react";
import Header from "../../../components/common/header/Header";
// import SideDrawer from "../../../components/common/sideDrawer/SideDrawer";
import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";
import AdminProfile from "../../../components/admin/adminProfile/AdminProfile";

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
            <Header role="admin"/>
            <SideDrawer role={"admin"} />
            <div className="d-flex justify-content-center">
                <AdminProfile />
            </div>
        </>
    )
}

export default MyProfilePage