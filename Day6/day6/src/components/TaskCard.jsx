import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const TaskCard = (props) => {
  return (
    <div style={{marginRight : "20px"}}>
         <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={props.state.img} />}
  >
    <Meta title={props.state.name}/>    
    <Meta title={props.state.task}/>    
    <Meta title={props.state.date}  />
  </Card>
    </div>
  )
}

export default TaskCard