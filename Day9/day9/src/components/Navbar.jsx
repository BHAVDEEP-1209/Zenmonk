import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {handleLogOut} from "../slices/userSlice"

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout2=()=>{
        navigate("/");
        dispatch(handleLogOut());
    }
  return (
    <div className='nav'>
        <div className="nav_left">
        ResumeMonk
        </div>
        <div className="nav_right">
            <button className='nav_button' onClick={()=>{navigate("/homepage")}}>Home</button>
            <button className='nav_button2' onClick={handleLogout2}>Logout</button>

        </div>

    </div>
  )
}

export default Navbar