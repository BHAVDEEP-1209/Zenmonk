import React, { useEffect, useState } from "react";
import "../Styles/Login.scss";
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";
import { auth, db, provider } from "../firebase";
import { setValue } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { doc, updateDoc } from "firebase/firestore";
import { Alert, Space, Spin } from 'antd';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading,setIsLoading] = useState(false);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues,setFormValues] = useState({email: "", password : ""});

  const handleGoogleSignIn=async()=>{
    setIsLoading(true);
    try{
      const response = await signInWithPopup(auth,provider);
      dispatch(setValue(response.user));
      await updateDoc(doc(db, "users", response.user.uid), {
        status : "online"
      });
      setIsLoading(false);
      navigate("/homepage");
    }catch(err){  
      console.log(err);
    }
  }

  const handleChange=(e)=>{
    const {name,value} = e.target;

    setFormErrors((prev)=>{
      return {
        ...prev,
        [name] : "",
      }
    })
    setFormValues((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }

  const validate=(values)=>{
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!values.email){
      errors.email = "Email required!";
    }else if(!regex.test(values.email)){
      errors.email = "Invalid Email Address!"
    }
    if(!values.password){
      errors.password = "Password required!";
    }
    return errors;
  }

  const handleSubmit = async (e) => {
    setFormErrors({});
    e.preventDefault();
    // setIsLoading(true);
    setFormErrors(validate(formValues));
    setIsSubmit(true);  
    
  };

  useEffect(()=>{
    const setData=async()=>{
      setIsLoading(true);
      const email = formValues.email;
      const password = formValues.password;
  
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        await updateDoc(doc(db, "users", result.user.uid), {
          status : "online"
        });
        dispatch(setValue(result.user));
        setIsLoading(false);
        navigate("/homepage");
      } catch (err) {
        setIsLoading(false);
        setFormErrors((prev)=>{
          return {
            ...prev,
            other : err.message
          }
        })
        
      }
    }
    if(Object.keys(formErrors).length===0 && isSubmit){
      setData();
    }
  },[formErrors])

  return (
    <>

      <div className="formContainer">
      <div className="formWrapper">
      {
        isLoading && <Spin tip="Loading" size="large" />
      }
        <span className="logo">Bhav Chat</span>
        <span className="title">Log In</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="email" name="email" id="" placeholder="email"  onChange={handleChange} value={formValues.email}/>
          <p className="error">{formErrors.email}</p>
          <input type="password" name="password" id="" placeholder="password" onChange={handleChange} value={formValues.password}/>
          <p className="error">{formErrors.password}</p>
          <p className="error">{formErrors.other}</p>
          <button>Sign In</button>
        </form>
        <p>
          Don't have an account?
          <Link to="/signup">Register</Link>
        </p>
        <div className="formContainerFooter">
          <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Login;
