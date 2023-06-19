import React from 'react'
import { DatePicker, Space } from 'antd';

const DateComponent = (props) => {
    const onChange = (date, dateString) => {
        props.state((prev)=>{
          return {
            ...prev,
            "date" : dateString
          }
        })
      };
  return (
    <div> <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space></div>
  )
}

export default DateComponent