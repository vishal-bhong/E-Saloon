import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

import "./BarberProfileEdit.css";


const BarberProfileEdit = () => {

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
    
    const handleSave = (e) => {
        // e.preventDefault();          
        // dispatch(userSignup(signupData, navigate));
        console.log(barberRegisterData);
    }    
     

    const handleExit = () => {
        setBarberRegisterData({ fullName: '', email:'', address: '', mobileNo: '', Dob: '', desc: '', shopImg: ''});
    }

    return (
        <>
            <form className="flex-column border border-dark" id="register" >     

                <div className="col-12 mt-5 ms-2" id="fullwidthinput"></div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Shop Name" aria-label="Shop Name" value={barberRegisterData.shopName} onChange={(e) => setBarberRegisterData({...barberRegisterData, shopName: e.target.value})}/>               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="email" className="form-control form-control-lg" placeholder="email" aria-label="email" value={barberRegisterData.email} onChange={(e) => setBarberRegisterData({ ...barberRegisterData, email: e.target.value })} />               
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

                <div className="row mt-3 me-4" id="fullwidthinput">
                    <div className="col-6">
                        <label for="file_input2" className="col-form-label fw-bold ms-4">Shop image :</label> <br/>
                    </div>

                    <div className="col-6">
                        <FileBase type="file" multiple={false} onDone={ ({ base64 }) => setBarberRegisterData({ ...barberRegisterData, shopImgImg: base64 }) } id='file_input2' /> <br />
                    </div>
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <textarea type="text" className="form-control form-control-lg" placeholder="shop description" aria-label="shop description" value={barberRegisterData.desc} onChange={(e) => setBarberRegisterData({...barberRegisterData, desc: e.target.value})}/>               
                </div> 

                <div className="row gx-5 mt-4 mb-3">

                    <div className="col ms-2">
                        <Link to="/barber/profile">
                            <button className="btn btn-primary" id="regbtn" type="submit" onClick={handleSave}>Save</button>
                        </Link> 
                    </div>

                    <div className="col me-1">
                        <Link to="/barber/profile">
                            <button className="btn btn-danger" id="regbtn" onClick={handleExit}>exit</button>
                        </Link>       
                    </div> 
                </div>

            </form>
        </>
    );
}

export default BarberProfileEdit;