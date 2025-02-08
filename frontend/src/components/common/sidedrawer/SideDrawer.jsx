import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'

const SideDrawer = ({ role }) => {

      const menuItems = {
         customer: ['Dashboard', 'Profile', 'Appointments'],
         barber: ['Dashboard', 'profile', 'hairStyles' ],
         admin: ['Dashboard', 'barberManager', 'profile', 'register']
       };

    return(
        <>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvas" data-bs-keyboard="true">
           <div className="offcanvas-header d-flex justify-content-end">
                <div className="nav-item me-0 mt-2" id="nav-item">
                    <a type="button" className="" data-bs-dismiss="offcanvas" aria-label="Close" id="nav-item-name">    
                        <i className="bi bi-arrow-left-circle h2"></i>
                    </a>                
                </div>
           </div>

            <hr className="text-white fw-bold" />

           <div className="offcanvas-body px-0">
               <ul className="nav nav-pills flex-column mb-sm-auto mb-0" id="menu">

                  {menuItems[role]?.map((item, index) => (
                     <li key={index} className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                        <Link to={`/${role}/${item}`} className="nav-link text-truncate w-100"  id="nav-item-name">
                           <span className="ms-1 d-none d-sm-inline h5">{item}</span>
                        </Link>
                     </li>    
                  ))}

                   {/* <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to='/customer/dashboard' className="nav-link text-truncate"  id="nav-item-name">
                        <i className="bi bi-house-door h4"></i><span className="ms-3 d-none d-sm-inline h5">Dashboard</span>
                     </Link>
                   </li>

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to='/customer/profile' className="nav-link text-truncate"  id="nav-item-name">
                        <i className="bi bi-person h4"></i><span className="ms-3 d-none d-sm-inline h5">My Profile</span>
                     </Link>
                   </li>

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to='/customer/appointments' className="nav-link text-truncate"  id="nav-item-name" >
                        <i className="bi bi-receipt h4"></i><span className="ms-3 d-none d-sm-inline h5">My Appointments</span>
                     </Link>
                   </li> 

                   <li className="nav-item pb-3" id="nav-item">
                     <Link to='' className="nav-link text-truncate"  id="nav-item-name">
                        <i className="bi bi-reply-all h4"></i><span className="ms-3 d-none d-sm-inline h5">Feedback</span>
                     </Link>
                   </li>  

                   <li className="nav-item pb-3" id="nav-item">
                     <Link className="nav-link text-truncate"  id="nav-item-name">
                        <i className="bi bi-send-exclamation h4"></i><span className="ms-3 d-none d-sm-inline h5">Contact us</span>
                     </Link>
                   </li>             */}
               </ul>
           </div>
           
        </div>
     </>
    )
}

export default SideDrawer