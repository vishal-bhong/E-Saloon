import './CustomerProfile.css'
import { BsPersonCircle } from "react-icons/bs";
import { MdMailOutline, MdPhone, MdEventNote, MdLocationOn } from 'react-icons/md'


const CustomerProfile = () => {
    return (
        <div className="myprofilepage border border-dark">

            <div className='d-flex justify-content-end m-4'>
                <BsPersonCircle className='fs-1 me-3 mt-1' />
                <h1>vishal bhong</h1>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdMailOutline className='ms-4 fs-3 mt-1' />
                <p className='ms-2 fs-4 fw-medium fst-italic'>Email :</p>
                <p className='ms-5 fs-5 '>vishalbhong@gmail.com</p>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdPhone className='ms-4 fs-3 mt-1' color="green" />
                <p className='ms-2 fs-4 fw-medium fst-italic'>Mobile No :</p>
                <p className='ms-5 fs-5 '>7397974785</p>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdEventNote className='ms-4 fs-3 mt-1' color="blue" />
                <p className='ms-2 fs-4 fw-medium fst-italic'>Date of birth :</p>
                <p className='ms-5 fs-5 '>16/03/2000</p>
            </div>

            <div className='d-flex justify-content-start ms-4 mt-4'>
                <MdLocationOn className='ms-4 fs-3 mt-1' color="orange" />
                <p className='ms-4 fs-4 fw-medium fst-italic'>Address :</p>
                <p className='ms-5 fs-5 '>A/P Nimgaon ketki, tal. Indapur, dist. Pune, Maharashtra</p>
            </div>
            
        </div>
    )
}

export default CustomerProfile