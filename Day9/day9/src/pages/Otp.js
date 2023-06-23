import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import OTPInput, { ResendOTP } from "otp-input-react";
import { useDispatch } from 'react-redux';
import {setValues} from "../slices/userSlice"
import { ToastContainer, toast } from 'react-toastify';
import { Button, Divider, notification, Space } from 'antd';




const Otp = () => {
 
  const [OTP, setOTP] = useState("");
  const [error,setError] = useState("");
  const otp = process.env.REACT_APP_OTP;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {number} = useParams();
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.info({
      message: `${placement}`,
      placement,
    });
  };
  
  const handleClick=()=>{
    if(otp==OTP){
      dispatch(setValues(number));
      navigate("/homepage");

    }else if(!OTP){
      openNotification("Fill the OTP!")
    }else{
      openNotification("Wrong OTP");
    }
  }

  return (
    <>
    {contextHolder}
    <div className='otp_div'>
      <div className="opt_details_div">
      <h1>Enter the opt</h1>
      {/* <input type="number" name="number" id="" value={number} onChange={(e)=>{setNumber(e.target.value) }}/> */}
       <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} secure className="otp_input" style={{borderRadius : "20px"}}/>
       <button onClick={handleClick} className='opt_button'>Submit</button>
       <ToastContainer />
       <p style={{color : "#fff"}}>{error}</p>
      </div>
    </div>
    </>
  )
}

export default Otp