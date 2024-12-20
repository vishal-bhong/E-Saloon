import './Appointment.css'

const Appointment = ({ appointment }) => {
    return (
        <div className="appointment d-container border m-5 col-md-8 border-1 border-secondary">
            <h5 className="m-3 text-success">Appointment :)</h5>

            <div className='ms-5'>
                <div className='d-flex'>
                    <p className='text-info me-4'>Shop Name : </p>
                    <p>{appointment.shopName}</p>
                </div>

                <div className='d-flex'>
                    <p className='text-info me-4'>Shop Address : </p>
                    <p>{appointment.address}</p>
                </div>

                <div className='d-flex'>
                    <p className='text-info me-4'>appointment date : </p>
                    <p>{appointment.date}</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <p className='text-info me-4'>appointment time : </p>
                        <p>{appointment.time}</p>
                    </div>
                    { 
                        appointment.status === 'Expired' ?
                             <p className='me-4 text-danger'>{appointment.status}</p>
                             : <p className='me-4 text-success'>{appointment.status}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Appointment