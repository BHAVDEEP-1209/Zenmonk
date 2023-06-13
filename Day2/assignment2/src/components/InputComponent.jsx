import React from 'react'
import { useState } from 'react';

const InputComponent = (props) => {
  const [inputItem, setInputItem] = useState("");
  const [error,setError] = useState(false);
  // const [inputDate , setInputDate] = useState("");

  const handleChange = (event)=>{
    
    if(inputItem){
      setError(false);
    }

    setInputItem(event.target.value);
  }

  const handleClick=(e)=>{

    (!inputItem) ? setError(true) : setError(false);
    e.preventDefault();
    if(inputItem){
    props.state.setItemsArray(curr=> [...curr , inputItem]);
    setInputItem("");
    }
   
  }

  const handleDateChange=(event)=>{
    props.state.setInputDate(event.target.value);
  }




  return (
    <>
     <div className='formContainer'>

<form action="">
  <div>
    <input type="text" name="" id="" className='inputText' value={inputItem} onChange={handleChange} required/>
    <button type='submit' className='inputButton' onClick={handleClick}>Add item!</button>
    {error && <span className='errorMessage'>Enter the task to save!</span> }
  </div>

  <div>
    <label htmlFor="date" className='dateLabel'>Enter Date</label>
    <input type="date" id="date" className='dateInput' onChange={handleDateChange} value={props.state.inputDate}/>
  </div>
</form>

</div>
    </>
  )
}

export default InputComponent