import React from 'react'
import { Card } from 'antd';
import BasicModal from "../components/BasicModal"
import Template2 from './Template2';
import Template3 from './Template3';
import {DeleteOutlined}from '@ant-design/icons'
import {deleteItem} from "../slices/resumeSlice"
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const ResumeCard = (props) => {
    const { Meta } = Card;
    const values = props.form
    const template = props.form.template
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const resume = useSelector(state => state.reducer.resume.resumes);
    const img = values.img ? values.img : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    const fName = values.fName ? values.fName : "First Name"
    const lName = values.lName ? values.lName : "Last Name"
    const email = values.email ? values.email : "abc@gmail.com"

    const handleDelete=()=>{
      const id = resume.indexOf(values);
      dispatch(deleteItem(id));
    }

    const handleEdit=()=>{
      navigate(`/resume/${props.id}`);
    }


  return (
    <>
  <div className="resume_card_div">
    <div className="resume_card_left_div">
      <img src={img} alt="" />
    </div>
    <div className='resume_card_right_div'>
        <p>{fName} {lName}</p>
        <p>{email}</p>
       <div className="resume_card_buttons_div">
       {
            template=="template1" && <BasicModal form={values} />
          }
          {
            template=="template2" && <Template2 form={values} />
          }
          {
            template=="template3" && <Template3 form={values} />
          } 
          <DeleteOutlined onClick={handleDelete} className='deleteIcon'/>
          {
            props.form.saveOption=="draft" && <button onClick={handleEdit} className='editButton'>Edit</button>
          }
       </div>
         
    </div>
  </div>
    </>
  )
}

export default ResumeCard