import React, { useState, useEffect } from "react";

import "./CustomerRegister.css";

// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import FileBase from 'react-file-base64';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// import { userSignup } from "../../../actions/userAuth";


const CustomerRegister = () => {

    const [ registerData, setRegisterData ] = useState({ fullName: '', email: '', password: '',confirmPassword: '', mobileNo: '', Dob: '', address: '' });
    const [ emailVerificationData, setEmailVerificationData ] = useState({ isVerifying: true, emailForVerification: '', OTP: '' });

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
        alert("submit  button clicked")
        // e.preventDefault();          
        // dispatch(userSignup(signupData, navigate));
    }    
     

    const handleClear = () => {
        setRegisterData({ fullName: '', email: '', password: '',confirmPassword: '', mobileNo: '', Dob: '', address: '' });
        setEmailVerificationData({ isVerifying: true, emailForVerification: '', OTP: '' });
    }

    return (
        <>
            <form className="flex-column border border-dark" id="register" >   
                <center>
                    <h2 className="fw-bold ms-5" id="regtitle">Customer Register</h2>
                </center>         


                <div className="col-12 mt-3 ms-2" id="fullwidthinput"></div> 

                

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Full Name" aria-label="full Name" value={registerData.fullName} onChange={(e) => setRegisterData({...registerData, fullName: e.target.value})}/>               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="email" className="form-control form-control-lg" placeholder="email" aria-label="email" value={emailVerificationData.emailForVerification} onChange={(e) => setEmailVerificationData({ ...emailVerificationData, emailForVerification: e.target.value })} />               
                </div> 

                {
                    emailVerificationData.emailForVerification ? (
                    <> 
                    {
                        emailVerificationData.isVerifying ?
                        (
                            <>
                             <div className="row ms-2 mt-3" id="fullwidthinput">
                                <input className="form-control" id="emailOtp" />
                                <div className="col-3 me-0 ms-auto text-dark">
                                    <button id="resend_otp" >Resend OTP</button>
                                </div>
                                <button className="col-3 me-0 ms-auto fw-semibold bg-success">submit OTP</button>
                             </div>
                            </>
                        ) :
                        (
                            <>
                              <div className="row ms-2 mt-3" id="fullwidthinput">                      
                                <button className="col-3 me-0 ms-auto" >Verify email</button>
                              </div>
                            </>
                        )
                    }                
                    </>
                    ) :   (<></>)
                    
                } 



                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="password" className="form-control form-control-lg" placeholder="password" aria-label="password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="password" className="form-control form-control-lg" placeholder="confirm password" aria-label="confirm password" value={registerData.confirmPassword} onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} />               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Mobile No." aria-label="mobile No" value={registerData.mobileNo} onChange={(e) => setRegisterData({...registerData, mobileNo: e.target.value})} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="date" className="form-control form-control-lg" placeholder="Date of birth" aria-label="DoB" value={registerData.Dob} onChange={(e) => setRegisterData({...registerData, Dob: e.target.value})}/>               
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
                  <a className="me-3 fw-bold" href="/customer/login">Already have an account.Click here to Login</a>
                </div> 
                <div className="col-12 d-flex justify-content-end mb-2">
                  <a className="me-3 fw-bold" href="/barber/register">Barber Register ?</a>
                </div>   
            </form>
        </>
    );
}

export default CustomerRegister;