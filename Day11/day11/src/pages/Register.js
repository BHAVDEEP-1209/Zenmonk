import React from 'react'
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

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
      const storageRef = ref(storage, "../assets/johnny.jfif");
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(

        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(result.user,{
              displayName,
              photoURL : downloadURL,
            });
            await setDoc(doc(db, "users", result.user.uid), {
              uid : result.user.uid,
              displayName,
              email,
              photoURL : downloadURL,
            });
            await setDoc(doc(db,"userChats",result.user.uid),{});
          });
        }
      );
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Bhav Chat</span>
        <span className="title">Register</span>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" name="" id="" placeholder='display name' />
          <input type="email" name="" id="" placeholder='email' />
          <input type="password" name="" id="" placeholder='password' />
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