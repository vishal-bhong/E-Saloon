import Appointment from "../../../components/customer/appointments/Appointment";
import Advertisement from "../../../components/common/advertisement/Advertisement";
import Header from "../../../components/common/header/Header";
import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";


const AppointmentPage = () => {

    const appointments = [
        {
            shopName : "Barber shop 1",
            address : "A/P Hinjewadi, pune",
            date : "16/03/2024",
            time: "12:30",
            status : 'Expired'
        },
        {
            shopName : "Barber shop 2",
            address : "A/P karad, sangli",
            date : "23/05/2024",
            time: "05:55",
            status : 'Expired'
        },
        {
            shopName : "Barber shop 3",
            address : "A/P Akurdi, pune",
            date : "17/08/2024",
            time: "03:15",
            status : 'Expired'
        },
        {
            shopName : "Barber shop 4",
            address : "A/P Chichawad, pune",
            date : "04/12/2024",
            time: "10:40",
            status : 'Active'
        },
        {
            shopName : "Barber shop 5",
            address : "A/P Wagholi, pune",
            date : "13/02/2025",
            time: "09:25",
            status : 'Active'
        }
    ]

    return (
        <>
            <Header role="customer" />
            <SideDrawer />
            <div className="">
                {
                    appointments.map((appointment) => {
                        return (
                            <Appointment key={appointment.shopName} appointment={appointment} />
                        )
                    })
                }
            </div>
            <div className="ads-column d-none d-lg-block">
                <Advertisement />              
            </div>
        </>
    )
}

export default AppointmentPage;