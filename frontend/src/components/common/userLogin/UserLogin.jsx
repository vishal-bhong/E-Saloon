import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./UserLogin.css";

import { toast } from "react-toastify";
import { userSignin } from "../../../api/CommonApi";



const UserLogin = () => {

    const [ formData, setFormData ] = useState({ email: '', password: '' });

    const navigate = useNavigate();


    const handleSubmit = async (e) => {

      try {
          e.preventDefault();
          const result = await userSignin(formData);
          console.log(result);
    
          toast.success(result.data.message);
    
          localStorage.setItem("jwtToken", result.data.jwt);
          localStorage.setItem("userType", result.data.userType);
    
          if(result.data.userType == "ADMIN"){
            navigate("/admin/dashboard");
          }
          else if(result.data.userType == "BARBER"){
            navigate("/barber/dashboard");
          }
          else{
            navigate("/customer/dashboard");
          }
        
      } catch (error) {
        toast.error("something went wrong");
      }

    }
  

    return (
      <>
        <center>
            <div id="loginbox">   
              
              <form className="border border-dark" autoComplete="off" id="login">        
                <div className="d-flex flex-column align-items-center" >

                    <center>
                        <h2 className="fw-bold mt-2" id="logintitle">Login</h2> 
                    </center>

                    <div className="col-12 mt-5" id="loginitem">
                        <input type="email" className="form-control form-control-lg" placeholder="email" aria-label="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div> 
                    <div className="col-12 mt-4" id="loginitem" >
                        <input type="password" className="form-control form-control-lg" placeholder="password" aria-label="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </div>

                    <div className="col-12 mt-4" id="loginitem">
                        <button className="btn btn-primary mb-4" id="loginbtn" type="submit" onClick={handleSubmit}>Log In</button>
                    </div> 
                    <div className="col-12 d-flex justify-content-end mb-2 me-4">
                        <a className="fw-bold" href="/customer/register">Don't have an account.Click here to Register</a>
                    </div> 
                    <div className="col-12 d-flex justify-content-end mb-2">
                        <a className="me-3 fw-bold" href="/barber/login">Barber Login ?</a>
                    </div>       
                </div>
              </form>  
            </div>
        </center>
      </>
    );
}

export default UserLogin;