import React from 'react';
import './Appointment.css'

const Appointment = ({ appointment }) => {

    return (
        <div className="appointment d-container border m-5 col-md-8 border-1 border-secondary">
            <h5 className="m-3 text-success">Appointment :)</h5>

            <div className='ms-5'>
                <div className='d-flex'>
                    <p className='text-info me-4'>Shop Name : </p>
                    <p>{appointment?.shopName}</p>
                </div>

                <div className='d-flex'>
                    <p className='text-info me-4'>Shop Address : </p>
                    <p>{appointment?.barberAddress}</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <p className='text-info me-4'>appointment date : </p>
                        <p>{appointment?.appointmentDate}</p>
                    </div>
                    { 
                        appointment.status === 'PENDING' ?
                             <p className='me-4 text-danger'>{appointment.appointmentStatus}</p>
                             : <p className='me-4 text-success'>{appointment.appointmentStatus}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Appointment