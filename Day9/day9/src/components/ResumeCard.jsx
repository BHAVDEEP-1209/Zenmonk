import React from 'react'
import { Card } from 'antd';
import BasicModal from "../components/BasicModal"
import Template2 from './Template2';
import Template3 from './Template3';


const ResumeCard = (props) => {
    const { Meta } = Card;
    const values = props.form
    const template = props.form.template


  return (
    <>
  <div className="resume_card_div">
    <div className="resume_card_left_div">
      <img src={values.img} alt="" />
    </div>
    <div className='resume_card_right_div'>
        <p>{values.fName} {values.lName}</p>
        <p>{values.email}</p>
        {
            template=="template1" && <BasicModal form={values} />
          }
          {
            template=="template2" && <Template2 form={values} />
          }
          {
            template=="template3" && <Template3 form={values} />
          } 
         
    </div>
  </div>
    </>
  )
}

export default ResumeCard