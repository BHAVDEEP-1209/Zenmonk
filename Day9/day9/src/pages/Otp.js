import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Otp = () => {
  const [number,setNumber] = useState("");
  const otp = process.env.REACT_APP_OTP;
  const navigate = useNavigate();
  
  const handleClick=()=>{
    if(otp==number){
      window.alert("successful login!")
      navigate("/homepage");
    }else{
      window.alert("wrong otp!");
    }
  }

  return (
    <div className='otp_div'>
      <h1>Enter the opt</h1>
      <input type="number" name="number" id="" value={number} onChange={(e)=>{setNumber(e.target.value) }}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default Otp