import React from 'react';
import './AdminProfile.css'
import { BsPersonCircle } from "react-icons/bs";
import { MdMailOutline, MdPhone, MdEventNote, MdLocationOn } from 'react-icons/md'
import { getAdminProfile } from '../../../api/AdminApi';
import { useEffect } from 'react';


const AdminProfile = () => {
    const [data, setData] = React.useState({});
    //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
    useEffect(() => {
        console.log("in adminprofile useEffect !")
        handlegetAdminProfile();
    },[])


    const handlegetAdminProfile = async () => {
        const result = await getAdminProfile();
        setData(result?.data);
    }

    useEffect(() => {
        console.log(data)
    },[data])

    return (
        <div className="myprofilepage border border-dark">

            <div className='d-flex justify-content-end m-4'>
                <BsPersonCircle className='fs-1 me-3 mt-1' />
                <h1>{data?.fullName}</h1>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdMailOutline className='ms-4 fs-3 mt-1' />
                <p className='ms-2 fs-4 fw-medium fst-italic'>Email :</p>
                <p className='ms-5 fs-5 '>{data?.email}</p>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdPhone className='ms-4 fs-3 mt-1' color="green" />
                <p className='ms-2 fs-4 fw-medium fst-italic'>Mobile No :</p>
                <p className='ms-5 fs-5 '>{data?.mobile}</p>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdEventNote className='ms-4 fs-3 mt-1' color="blue" />
                <p className='ms-2 fs-4 fw-medium fst-italic'>Date of birth :</p>
                <p className='ms-5 fs-5 '>{data?.dob}</p>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdLocationOn className='ms-4 fs-3 mt-1' color="orange" />
                <p className='ms-4 fs-4 fw-medium fst-italic'>Address :</p>
                <p className='ms-5 fs-5 '>{data?.address}</p>
            </div>
            
        </div>
    )
}

export default AdminProfile