import React from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SideDrawer = () => {

      // React.useEffect(() => 
      // { 
      //    // Initialize Offcanvas Components after DOM is fully loaded 
      //    var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas')) 
      //    var offcanvasList = offcanvasElementList.map(function (offcanvasEl) { 
      //       return new windowbootstrap.Offcanvas(offcanvasEl) }) 
      // }, []);

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

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to='/customer/dashboard' className="nav-link text-truncate"  id="nav-item-name">
                        <i className="bi bi-house-door h4"></i><span className="ms-3 d-none d-sm-inline h5">Dashboard</span>
                     </Link>
                   </li>

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to='/customer/profile/:id' className="nav-link text-truncate"  id="nav-item-name">
                        <i className="bi bi-person h4"></i><span className="ms-3 d-none d-sm-inline h5">My Profile</span>
                     </Link>
                   </li>

                   <li className="nav-item pb-3" id="nav-item" data-bs-dismiss="offcanvas">
                     <Link to='/customer/appointments' className="nav-link text-truncate"  id="nav-item-name" >
                        <i className="bi bi-receipt h4"></i><span className="ms-3 d-none d-sm-inline h5">My Appointments</span>
                     </Link>
                   </li>
                   
                   <li className="nav-item pb-3" id="nav-item">
                     <Link to='/' className="nav-link text-truncate"  id="nav-item-name">
                        <i className="bi bi-bell h4"></i><span className="ms-3 d-none d-sm-inline h5">Notifications</span>
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
                   </li>            
               </ul>
           </div>
           
        </div>
     </>
    )
}

export default SideDrawer