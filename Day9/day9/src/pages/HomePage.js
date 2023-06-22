import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResumeInitialValues } from '../slices/resumeSlice';
import { Link, useNavigate } from 'react-router-dom';
import ResumeCard from '../components/ResumeCard';
import {handleLogOut} from "../slices/userSlice"

const HomePage = () => {
    const dispatch = useDispatch();
    const resume = useSelector(state=>state.reducer.resume.resumes);
    const number = useSelector(state=>state.reducer.user.user.number);
    const [localArray,setLocalArray] = useState(resume);
    const navigate = useNavigate();
  
    // const [onLoad,setOnLoad] = useState(false);
    // const [number2,setNumber] = useState("");

    // console.log(resume)

    useEffect(()=>{
        // const number = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).user?.number
        // const localValue = JSON.parse(localStorage.getItem(`${number}`))

        // if(localValue==undefined){
        //     localStorage.setItem(`${number}`,JSON.stringify(["asdasdasd"]));
        // }
        // const localArray = JSON.parse(localStorage.getItem(`${number}`))
        // dispatch(setResumeInitialValues(localArray));
        // setNumber(number);    
    },[])

    useEffect(()=>{
      setLocalArray(resume.filter((ele)=>{
          return ele.createdBy == number
        }))
    },[resume])

    const handleClick=()=>{
        dispatch(handleLogOut());
        navigate("/");
    }
   
  return (
    <>
    <h1>Your Resumes!</h1>
    <button onClick={handleClick}>logout</button>
    <div className='hompage_div'>
      
      {
        localArray.map((ele,ind)=>{
          return <ResumeCard form={ele} id={ind}/>
        })
      }

        <Link to="/resume"><button >add resume</button></Link>
    </div>
      </>
  )
}

export default HomePage