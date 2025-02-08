import BarberProfileEdit from "../../../components/barber/barberProfile/BarberProfileEdit";
import Header from "../../../components/common/header/Header";

import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";

const BarberProfileEditPage = () => {

    return (
        <>
            <Header role="barber"/>
            <SideDrawer role={"barber"} />
            <div className="d-flex justify-content-center">
                <BarberProfileEdit />
            </div>
        </>
    )
}

export default BarberProfileEditPage