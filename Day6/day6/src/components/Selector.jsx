import React, { useState } from 'react'
import { Select } from 'antd';
import { useSelector } from 'react-redux';

const Selector = (props) => {
    const users = useSelector((state)=>state.task.users);
    let option = [];


    const onChange = (value) => {
        props.state((prev)=>{
          return {
            ...prev,
            "name" : value
          }
        })
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };
  return (
   <>
   {
    users.map((ele)=>{
        option = [...option,{value : ele.id,label : ele.name}]
    })
   }
    <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={option}
    className='selector'
  />
   </>
  )
}

export default Selector