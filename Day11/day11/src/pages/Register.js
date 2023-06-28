import React, { useEffect, useState } from 'react'
import "../Styles/Login.scss"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage , db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import {setValue} from "../slices/userSlice"
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { Alert, Space, Spin } from 'antd';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading,setIsLoading] = useState(false);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues,setFormValues] = useState({email: "", password : "", name: ""});


  const validate=(values)=>{
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!values.name){
      errors.name = "Name required!";
    }
    if(!values.email){
      errors.email = "Email required!";
    }else if(!regex.test(values.email)){
      errors.email = "Invalid Email Address!"
    }
    if(!values.password){
      errors.password = "Password required!";
    }else if(values.password.length<6){
      errors.password = "Password too short!"
    }
    return errors;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(true);
    setFormErrors(validate(formValues));
    setIsSubmit(true);  
  }

  const handleChange=(e)=>{
    const {name,value} = e.target;

    setFormErrors((prev)=>{
      return {
        ...prev,
        [name] : ""
      }
    })
    setFormValues((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }

  useEffect(()=>{
    const setData=async()=>{
      setIsLoading(true);
      const displayName = formValues.name;
      const email = formValues.email;
      const password = formValues.password;

      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        setIsLoading(false);
        navigate("/");
        await updateProfile(result.user,{
          displayName,
        });
        await setDoc(doc(db, "users", result.user.uid), {
          uid : result.user.uid,
          displayName,
          email,
          status : "offline"
        });
        await setDoc(doc(db,"userChats",result.user.uid),{});
      } catch (error) {
        console.log(error);
      }
    }
    if(Object.keys(formErrors).length===0 && isSubmit){
      setData();
    }
  },[formErrors])

  return (
    <div className="formContainer">
      <div className="formWrapper">
      {
        isLoading && <Spin tip="Loading" size="large" />
      }
        <span className="logo">Bhav Chat</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="name" id="" placeholder='display name' onChange={handleChange} value={formValues.name}/>
          <p className='error'>{formErrors.name}</p>
          <input type="text" name="email" id="" placeholder='email' onChange={handleChange} value={formValues.email}/>
          <p className='error'>{formErrors.email}</p>
          <input type="password" name="password" id="" placeholder='password' onChange={handleChange} value={formValues.password}/>
          <p className='error'>{formErrors.password}</p>
          <input type="file" name="" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <AddPhotoAlternateIcon className='icon' />
            <span>Add avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? <Link to="/">Log In</Link></p>
      </div>
    </div>
  )
}

export default Register