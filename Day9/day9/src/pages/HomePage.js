import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setResumeInitialValues } from '../slices/resumeSlice';
import { Link, useNavigate } from 'react-router-dom';
import ResumeCard from '../components/ResumeCard';
import Navbar from '../components/Navbar';
import {PlusOutlined , EnterOutlined }from '@ant-design/icons'

const HomePage = () => {
    const dispatch = useDispatch();
    const resume = useSelector(state=>state.reducer.resume.resumes);
    const number = useSelector(state=>state.reducer.user.user.number);
    const [localArray,setLocalArray] = useState(resume);
    const navigate = useNavigate();

   useEffect(()=>{
      setLocalArray(resume.filter((ele)=>{
          return ele.createdBy == number
        }))
    },[resume])
   
  return (
    <>
   <div className="homepage_main_div">
    <Navbar />
    <div className='hompage_div'>
   <h1>Your Resumes!</h1>
      
      <div className="homepage_card_div">
      {
        localArray.map((ele,ind)=>{
          return <ResumeCard form={ele} id={ind}/>
        })
      }
      </div>

        <Link to="/resume"><button className='add_resume_button'><PlusOutlined /></button></Link>
        
       
    </div>
   </div>
      </>
  )
}

export default HomePage