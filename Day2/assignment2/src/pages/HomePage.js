import React from 'react'
import { useState } from 'react'
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import ListComponent from '../components/ListComponent';

const HomePage = (props) => {
  
  const [itemsArray, setItemsArray] = useState([]);
  const [inputDate , setInputDate] = useState("");


  return (
    <>

      <InputComponent state={{itemsArray,setItemsArray,inputDate,setInputDate}}/>
      <ButtonComponent />
      <ListComponent state={{itemsArray,setItemsArray,...props}} />
     
    {
      inputDate && 
      <div className='inputDate'>
          <span>Date:</span> {inputDate}
      </div>
    }
    </>
  )
}

export default HomePage