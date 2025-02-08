import BarberProfile from "../../../components/barber/barberProfile/BarberProfile";
import Header from "../../../components/common/header/Header";

import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";

const BarberProfilePage = () => {

    return (
        <>
            <Header role="barber"/>
            <SideDrawer role={"barber"} />
            <div className="d-flex justify-content-center">
                <BarberProfile />
            </div>
        </>
    )
}

export default BarberProfilePage