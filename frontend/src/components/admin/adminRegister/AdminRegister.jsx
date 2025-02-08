import React, { useState } from "react";

import "./AdminRegister.css";

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerAdmin } from "../../../api/AdminApi";

const AdminRegister = () => {

    const [ registerData, setRegisterData ] = useState({ fullName: '', email: '', password: '',confirmPassword: '', mobile: '', dob: '', address: '' });
    const navigate = useNavigate();
    
    
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        console.log(registerData);
        if(registerData.password !== registerData.confirmPassword) {
            toast.warning("'password' and 'confirmPassword' does not match");
            return;
        }     
        const result = await registerAdmin(registerData);
        toast.success(result.data.message);
        navigate("/login")  
    }    


    const handleClear = () => {
        setRegisterData({ fullName: '', email: '', password: '',confirmPassword: '', mobile: '', dob: '', address: '' });

    }

    return (
        <>
            <form className="flex-column border border-dark" id="register" >   
                <center>
                    <h2 className="fw-bold ms-5" id="regtitle">Admin Register</h2>
                </center>         


                <div className="col-12 mt-3 ms-2" id="fullwidthinput"></div> 

                

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Full Name" aria-label="full Name" value={registerData.fullName} onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}/>               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="email" className="form-control form-control-lg" placeholder="email" aria-label="email" value={registerData.email} onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} />               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="password" className="form-control form-control-lg" placeholder="password" aria-label="password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="password" className="form-control form-control-lg" placeholder="confirm password" aria-label="confirm password" value={registerData.confirmPassword} onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} />               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Mobile No." aria-label="mobile No" value={registerData.mobile} onChange={(e) => setRegisterData({...registerData, mobile: e.target.value})} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="date" className="form-control form-control-lg" placeholder="Date of birth" aria-label= "dob" value={registerData.dob} onChange={(e) => setRegisterData({...registerData, dob: e.target.value})}/>               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <input type="text" className="form-control form-control-lg" placeholder="Address" aria-label="Address" value={registerData.address} onChange={(e) => setRegisterData({...registerData, address: e.target.value})}/>               
                </div> 

                <div className="row gx-5 mt-4 mb-3">

                    <div className="col ms-2">
                    <button className="btn btn-primary" id="regbtn" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>

                    <div className="col me-1">
                    <button className="btn btn-danger" id="regbtn" onClick={handleClear}>Clear</button>
                    </div>
                    
                </div>
                <div className="col-12 d-flex justify-content-end mb-2">
                  <a className="me-3 fw-bold" href="/login">Already have an account.Click here to Login</a>
                </div> 
                <div className="col-12 d-flex justify-content-end mb-2">
                  <a className="me-3 fw-bold" href="/barber/register">Barber Register ?</a>
                </div>   
            </form>
        </>
    );
}

export default AdminRegister;