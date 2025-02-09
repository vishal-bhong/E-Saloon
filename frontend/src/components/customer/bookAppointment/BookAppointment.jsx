import React from 'react'
import './BookAppointment.css'
import { MdMailOutline, MdPhone } from 'react-icons/md'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { getBarberProfile } from '../../../api/CustomerApi';



const BookAppointment = () => {
    const [data, setData] = React.useState({});
    const { barberId } = useParams();

    //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
    React.useEffect(() => {
        console.log("in barber profile useEffect !")
        handlegetBarberProfile(barberId);
    },[])


    const handlegetBarberProfile = async (shopId) => {
        const result = await getBarberProfile(barberId);
        console.log(result);
        setData(result?.data);
    }

    React.useEffect(() => {
        console.log(data)
    },[data])

    return (
        <div className="appointmentPage border border-dark mb-5">

            <div className='row'>
                <div className='col-md-3'>
                    <img 
                        src={data?.shopImg}
                        alt='img'
                        className="w-100 h-75 m-4 border-4 rounded-3 "
                        />
                </div>
                <div className='col-md-9'>
                    <div className='d-flex justify-content-start mt-4 ms-5'>    
                        <h1>{data?.shopName}</h1>
                    </div>

                    <div className='d-flex justify-content-start ms-4 mt-3'>
                        <MdMailOutline className='ms-4 fs-3 mt-1' />
                        <p className='ms-2 fs-5 fw-medium fst-italic'>Email :</p>
                        <p className='ms-5 fs-5 '>{data?.email}</p>
                    </div>

                    <div className='d-flex justify-content-start ms-4 mt-3'>
                        <MdPhone className='ms-4 fs-5 mt-1' color="green" />
                        <p className='ms-2 fs-4 fw-medium fst-italic'>Mobile No :</p>
                        <p className='ms-5 fs-5 '>{data?.mobile}</p>
                    </div>

                </div>
            </div>

            <div className=' ms-4 mt-2'>
                <p className='ms-4 fs-4 fw-medium fst-italic'>Address :</p>
                <p className='ms-5 fs-5 '>{data?.address}</p>
            </div>

            <div className=' ms-4 mt-2'>
                <p className='row ms-4 fs-4 fw-medium fst-italic'>Description :</p>
                <p className='row mx-5 fs-5 '>{data?.description}</p>
            </div>

            <div className=' ms-4 mt-2'>
                <p className='row ms-4 fs-4 fw-medium fst-italic'>Hair styles offered :</p>
                <ul>
                    {
                        data?.hairStyles.map((hairStyle) => (
                            <li>
                                {hairStyle.style} - Rs. {hairStyle.price}
                            </li>
                        ))
                    }
                </ul>    
            </div>


            <div className="d-flex justify-content-center my-5">
                    <button className="btn btn-primary w-50" id="regbtn">Book Appointment</button>
            </div>
    
        </div>
    )
}

export default BookAppointment