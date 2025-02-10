import React from "react";
import Appointment from "../../../components/customer/appointments/Appointment";
import Advertisement from "../../../components/common/advertisement/Advertisement";
import Header from "../../../components/common/header/Header";
import SideDrawer from "../../../components/common/sidedrawer/SideDrawer";
import { getAllAppointments } from "../../../api/CustomerApi";


const AppointmentPage = () => {

    const [data, setData] = React.useState([]);

    //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
    React.useEffect(() => {
        console.log("in get appointments useEffect !")
        handleGetAppointments();
    },[])


    const handleGetAppointments = async () => {
        const result = await getAllAppointments();                
        if (result && result.status === 204) {
        setData([]); // Handle the case where there's no content by setting data to an empty array
        } else {
        setData(result || []); // Set data to the response data or an empty array if undefined
        }
    }

    React.useEffect(() => {
        console.log(data)
    },[data])


    return (
        <>
            <Header role="customer" />
            <SideDrawer role="customer" />
            <div className="">
                {
                    data?.map((appointment) => {
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