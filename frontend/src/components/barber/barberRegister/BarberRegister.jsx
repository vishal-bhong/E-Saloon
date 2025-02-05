import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

import "./BarberRegister.css";


const BarberRegister = () => {

    const [ barberRegisterData, setBarberRegisterData] = useState({ shopName: '', email:'', password: '', confirmPassword: '', mobileNo: '', dob: '', address: '', experience: '', licenseImg: ''});
 
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     setEmailVerificationData({ ...emailVerificationData, isVerifying: false, OTP: '' })
    // }, [emailVerificationData.emailForVerification]);


    // const handleGetOtp = (e) => {
    //     e.preventDefault();
    //     setEmailVerificationData({ ...emailVerificationData, isVerifying: true, OTP: '' });

    //     axios.post('http://localhost:5000/user/generateOtpForEmail', emailVerificationData)
    //      .then(res =>{
    //          toast.success(`OTP sent successfully to ${res.data.result}`);                                    
    //      })
    //      .catch((err) => {
    //          console.log(err.message)            
    //      });

    // }

    // const handleOtpSubmit = (e) => {
    //     e.preventDefault();

    //     axios.post('http://localhost:5000/user/verifyOtpForEmail', emailVerificationData)
    //      .then(res =>{
    //         toast.success(`${res.data.message}`)
    //         setSignupData({ ...signupData, email: res.data.result })                    
    //      })
    //      .catch((err) => {
    //          toast.error(`${err.response.data.message}`)
    //      });
    // }
    
    const handleSubmit = (e) => {
        // e.preventDefault();          
        // dispatch(userSignup(signupData, navigate));
        console.log(barberRegisterData);
    }    
     

    const handleClear = () => {
        setBarberRegisterData({ fullName: '', email:'', password: '', confirmPassword: '', address: '', mobileNo: '', Dob: '', desc: '', licenseImg: ''});
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
                <input type="text" className="form-control form-control-lg" placeholder="Mobile No." aria-label="mobile No" value={barberRegisterData.mobileNo} onChange={(e) => setBarberRegisterData({...barberRegisterData, mobileNo: e.target.value})} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="date" className="form-control form-control-lg" placeholder="Date of birth" aria-label="DoB" value={barberRegisterData.dob} onChange={(e) => setBarberRegisterData({...barberRegisterData, dob: e.target.value})}/>               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <input type="text" className="form-control form-control-lg" placeholder="Address" aria-label="Address" value={barberRegisterData.address} onChange={(e) => setBarberRegisterData({...barberRegisterData, address: e.target.value})}/>               
                </div> 

                <div className="row mt-3 me-4       " id="fullwidthinput">
                    <div className="col-6">
                        <label for="file_input2" className="col-form-label fw-bold">Shop image :</label> <br/>
                    </div>

                    <div className="col-6">
                        <FileBase type="file" multiple={false} onDone={ ({ base64 }) => setBarberRegisterData({ ...barberRegisterData, licenseImg: base64 }) } id='file_input2' /> <br />
                    </div>
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <textarea type="text" className="form-control form-control-lg" placeholder="shop description" aria-label="shop description" value={barberRegisterData.desc} onChange={(e) => setBarberRegisterData({...barberRegisterData, desc: e.target.value})}/>               
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