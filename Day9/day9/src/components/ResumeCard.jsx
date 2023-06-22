import React from 'react'
import { Card } from 'antd';
import BasicModal from "../components/BasicModal"
const ResumeCard = (props) => {
    const { Meta } = Card;
    const values = props.form
  return (
    <>
      <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.form.img} />}
   
  >
    <Meta title={props.fName} description={props.fName} />
    <BasicModal form={values} id={props.id}/>
  </Card>
    </>
  )
}

export default ResumeCard