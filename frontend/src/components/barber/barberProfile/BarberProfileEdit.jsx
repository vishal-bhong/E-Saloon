import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';

import "./BarberProfileEdit.css";
import { getBarberProfile, updateBarberProfile } from "../../../api/BarberApi";
import { toast } from "react-toastify";


const BarberProfileEdit = () => {

    const [ barberRegisterData, setBarberRegisterData] = useState({ shopName: '', email:'', mobile: '', address: '', description: '', shopImg: ''});
    // const { Id } = useParams();
    const navigate = useNavigate();

    //React.StrictMode intentionally mounts components twice in development to help identify potential side effects and other issues in your components.
    React.useEffect(() => {
        console.log("in barber edit profile useEffect !")
        handlegetBarberProfile();
    },[])


    const handlegetBarberProfile = async () => {
        const result = await getBarberProfile();

        if (result?.data) {
            const { shopName, email, mobile, address, description, shopImg } = result.data;
            setBarberRegisterData({ shopName, email, mobile, address, description, shopImg });
        }
          
    }

    
    const handleSave = async () => {         
        const result = await updateBarberProfile(barberRegisterData);
        console.log(result);
        
        if(result?.status === 200){
            toast.success(result?.data?.message);
            navigate("/barber/profile");
        }
    }    
     

    const handleExit = () => {
        setBarberRegisterData({ fullName: '', email:'', address: '', mobile: '', description: '', shopImg: ''});
        navigate("/barber/profile");
    }

    return (
        <>
            <div className="flex-column border border-dark" id="register" >     

                <div className="col-12 mt-5 ms-2" id="fullwidthinput"></div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Shop Name" aria-label="Shop Name" value={barberRegisterData.shopName} onChange={(e) => setBarberRegisterData({...barberRegisterData, shopName: e.target.value})}/>               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="email" className="form-control form-control-lg" placeholder="email" aria-label="email" value={barberRegisterData.email} onChange={(e) => setBarberRegisterData({ ...barberRegisterData, email: e.target.value })} />               
                </div> 

                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                <input type="text" className="form-control form-control-lg" placeholder="Mobile No." aria-label="mobile No" value={barberRegisterData.mobile} onChange={(e) => setBarberRegisterData({...barberRegisterData, mobile: e.target.value})} />               
                </div> 


                <div className="col-12 mt-3 ms-2" id="fullwidthinput">
                    <input type="text" className="form-control form-control-lg" placeholder="Address" aria-label="Address" value={barberRegisterData.address} onChange={(e) => setBarberRegisterData({...barberRegisterData, address: e.target.value})}/>               
                </div> 

                <div className="row mt-3 me-4" id="fullwidthinput">
                    <div className="col-6">
                        <label for="file_input2" className="col-form-label fw-bold ms-4">Shop image :</label> <br/>
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
                            <button className="btn btn-primary" id="regbtn" onClick={handleSave}>Save</button>
                    </div>

                    <div className="col me-1">
                            <button className="btn btn-danger" id="regbtn" onClick={handleExit}>exit</button>      
                    </div> 
                </div>

            </div>
        </>
    );
}

export default BarberProfileEdit;