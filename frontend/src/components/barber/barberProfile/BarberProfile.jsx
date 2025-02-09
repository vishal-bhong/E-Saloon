import React from 'react'
import './BarberProfile.css'
import { MdMailOutline, MdPhone } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { getBarberProfile } from '../../../api/BarberApi'


const BarberProfile = () => {
    const [data, setData] = React.useState({});
    //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
    React.useEffect(() => {
        console.log("in barber profile useEffect !")
        handlegetBarberProfile();
    },[])


    const handlegetBarberProfile = async () => {
        const result = await getBarberProfile();
        setData(result?.data);
    }

    React.useEffect(() => {
        console.log(data)
    },[data])

    return (
        <div className="myprofilepage border border-dark">

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

            <Link to={`/barber/profile/edit/${data?.id}`}>
                <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-primary w-50" id="regbtn">Edit</button>
                </div>
            </Link  >
            
        </div>
    )
}

export default BarberProfile