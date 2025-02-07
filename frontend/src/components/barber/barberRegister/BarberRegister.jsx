import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { registerBarber } from "../../../api/BarberApi";
import { toast } from "react-toastify";

import "./BarberRegister.css";

const BarberRegister = () => {

    const [ barberRegisterData, setBarberRegisterData] = useState({ shopName: '', email:'', password: '', confirmPassword: '', mobile: '', address: '', description: '', shopImg: ''});
    const navigate = useNavigate();
   
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        if(barberRegisterData.password !== barberRegisterData.confirmPassword) {
            toast.warning("'password' and 'confirmPassword' does not match");
            return;
        }     
        const result = await registerBarber(barberRegisterData);
        toast.success(result.data.message);
        navigate("/login")         
    }    
     

    const handleClear = () => {
        setBarberRegisterData({ fullName: '', email:'', password: '', confirmPassword: '', address: '', mobile: '', description: '', shopImg: ''});
    }

    return (
        <>
            <form className="flex-column border border-dark" id="register" >
                <center>
                    <h2 className="fw-bold ms-5" id="regtitle">Barber Register</h2>
                </center>        


                <div className="col-12 mt-3 ms-2" id="fullwidthinput"></div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="shop Name" aria-label="shop Name" value={barberRegisterData.shopName} onChange={(e) => setBarberRegisterData({...barberRegisterData, shopName: e.target.value})}/>               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="email" className="form-control form-control-lg" placeholder="email" aria-label="email" value={barberRegisterData.email} onChange={(e) => setBarberRegisterData({ ...barberRegisterData, email: e.target.value })} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <input type="password" className="form-control form-control-lg" placeholder="password" aria-label="password" value={barberRegisterData.password} onChange={(e) => setBarberRegisterData({...barberRegisterData, password: e.target.value})} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <input type="password" className="form-control form-control-lg" placeholder="confirm password" aria-label="confirm password" value={barberRegisterData.confirmPassword} onChange={(e) => setBarberRegisterData({...barberRegisterData, confirmPassword: e.target.value})} />               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Mobile No." aria-label="mobile No" value={barberRegisterData.mobile} onChange={(e) => setBarberRegisterData({...barberRegisterData, mobile: e.target.value})} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <input type="text" className="form-control form-control-lg" placeholder="Address" aria-label="Address" value={barberRegisterData.address} onChange={(e) => setBarberRegisterData({...barberRegisterData, address: e.target.value})}/>               
                </div> 

                <div className="row mt-3 me-4" id="fullwidthinput">
                    <div className="col-6">
                        <label for="file_input2" className="col-form-label fw-bold">Shop image :</label> <br/>
                    </div>

                    <div className="col-6">
                        <FileBase type="file" multiple={false} onDone={ ({ base64 }) => setBarberRegisterData({ ...barberRegisterData, shopImg: base64 }) } id='file_input2' /> <br />
                    </div>
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <textarea type="text" className="form-control form-control-lg" placeholder="shop description" aria-label="shop description" value={barberRegisterData.description} onChange={(e) => setBarberRegisterData({...barberRegisterData, description: e.target.value})}/>               
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
                  <a className="me-3 fw-bold" href="/barber/login">Already have an account.Click here to Login</a>
                </div> 
                <div className="col-12 d-flex justify-content-end mb-2">
                  <a className="me-3 fw-bold" href="/customer/register">Customer register ?</a>
                </div> 

            </form>
        </>
    );
}

export default BarberRegister;