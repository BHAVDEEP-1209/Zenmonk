import React from 'react'
import { signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import { handleLogOut } from '../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { doc, updateDoc } from "firebase/firestore";
import { handleChatLogOut } from '../slices/chatSlice'

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state=>state.user.currentUser);
    const id = user.uid;

    const handleSignOut = async()=>{
        // signOut(auth);
        
        dispatch(handleLogOut());
        dispatch(handleChatLogOut());
        await updateDoc(doc(db, "users", id), {
          status : "offline"
        });
        navigate("/");
    }
  return (
    <div className='navbar'>
        <span className="logo">Bhav Chat</span>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            <span>{user.displayName}</span>
            <button onClick={handleSignOut}>logout</button>
        </div>
    </div>
  )
}

export default Navbar