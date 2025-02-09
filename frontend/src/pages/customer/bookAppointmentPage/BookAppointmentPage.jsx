import Header from "../../../components/common/header/Header";

import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";
import BookAppointment from "../../../components/customer/bookAppointment/BookAppointment";

const BookAppointmentPage = () => {

    return (
        <>
            <Header role="customer"/>
            <SideDrawer role={"customer"} />
            <div className="d-flex justify-content-center">
                <BookAppointment />
            </div>
        </>
    )
}

export default BookAppointmentPage