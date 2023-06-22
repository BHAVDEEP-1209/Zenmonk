import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValues } from '../slices/userSlice';
import { Input } from 'antd';

const Login = () => {
    const dispatch = useDispatch();
    const [number,setNumber] = useState("");
    // console.log(JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)?.number);

  return (
    <div className='login_div'>
        <div className="login_details">
          <h1>Hello!</h1>
          <h4>Enter Details to login in!</h4>
  
        <Input placeholder="Basic usage" value={number} onChange={(e)=>{setNumber(e.target.value) }}/>
        <Link to={`otp/${number}`}><button onClick={()=>{dispatch(setValues(number))}}>submit</button></Link>
        
        </div>
    </div>
  )
}

export default Login;