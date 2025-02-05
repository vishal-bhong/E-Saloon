import './BarberProfile.css'
import { MdMailOutline, MdPhone, MdEventNote, MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'


const BarberProfile = () => {
    return (
        <div className="myprofilepage border border-dark">

            <div className='row'>
                <div className='col-md-3'>
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKXewdagfM7G0-FJj9uEGPhWm0JEW6qbNHfg&s" 
                        alt='img'
                        className="w-100 h-75 m-4 border-4 rounded-3 "
                        />
                </div>
                <div className='col-md-9'>
                    <div className='d-flex justify-content-start mt-4 ms-5'>    
                        <h1>shop name</h1>
                    </div>

                    <div className='d-flex justify-content-start ms-4 mt-2'>
                        <MdMailOutline className='ms-4 fs-3 mt-1' />
                        <p className='ms-2 fs-5 fw-medium fst-italic'>Email :</p>
                        <p className='ms-5 fs-5 '>vishalbhong@gmail.com</p>
                    </div>

                    <div className='d-flex justify-content-start ms-4 mt-2'>
                        <MdPhone className='ms-4 fs-5 mt-1' color="green" />
                        <p className='ms-2 fs-4 fw-medium fst-italic'>Mobile No :</p>
                        <p className='ms-5 fs-5 '>7397974785</p>
                    </div>

                    <div className='d-flex justify-content-start ms-4 mt-2'>
                        <MdEventNote className='ms-4 fs-5 mt-1' color="blue" />
                        <p className='ms-2 fs-4 fw-medium fst-italic'>Date of birth :</p>
                        <p className='ms-5 fs-5 '>16/03/2000</p>
                    </div>
                </div>
            </div>


            <div className=' ms-4 mt-2'>
                <p className='ms-4 fs-4 fw-medium fst-italic'>Address :</p>
                <p className='ms-5 fs-5 '>A/P Nimgaon ketki, tal. Indapur, dist. Pune, Maharashtra</p>
            </div>

            <div className=' ms-4 mt-2'>
                <p className='row ms-4 fs-4 fw-medium fst-italic'>Description :</p>
                <p className='row mx-5 fs-5 '>A/P Nimgaon ketki, tal. Indapur, dist. Pune, MaharashtraA/P Nimgaon ketki, tal. Indapur, dist. Pune, Maharashtra A/P Nimgaon ketki, tal. Indapur, dist. Pune, Maharashtra  </p>
            </div>

            <Link to="/barber/profile/edit">
                <div className="d-flex justify-content-center my-5">
                        <button className="btn btn-primary w-50" id="regbtn" type="submit" >Edit</button>
                </div>
            </Link  >
            
        </div>
    )
}

export default BarberProfile