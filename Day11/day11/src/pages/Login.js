import React from "react";
import "../Styles/Login.scss";
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { signInWithEmailAndPassword , signInWithPopup} from "firebase/auth";
import { auth, provider } from "../firebase";
import { setValue } from "../slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn=async()=>{
    try{
      const response = await signInWithPopup(auth,provider);
      dispatch(setValue(response.user));
      navigate("/homepage");
    }catch(err){  
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch(setValue(result.user));
      navigate("/homepage");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bhav Chat</span>
        <span className="title">Log In</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
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
  );
};

export default Login;
