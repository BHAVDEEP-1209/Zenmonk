import React, { useState } from 'react'
import RootComponent from '../components/RootComponent'
import Component2 from '../components/Component2'
import "../Styles/App.scss"

const RootPage = () => {
  
  const [state , setState] = useState(false);

  // arrow function
  // const handleChange = (event)=>{
  //   window.alert("button clicked!");
  //   console.log(event);
  // }

  //naming function
  // function handleChange(event){
  //   window.alert("button clicked!");
  //   console.log(event);
  // }

  // preventDefault
  // const handleChange = (e)=>{
  //   e.preventDefault();
  //   e.stopPropagation(); // stop the click affect of parent element to the current element
  //   console.log("clicked!");
  // }


  // function for event propagation  testing 
  // const handleDivChange = ()=>{
  //   console.log("div clicked!");
  // }

  const handleButtonClick = ()=>{
    setState((prev)=>{
      return !prev;
    })
  }

  return (
    <>
    <h1>Hello RootPage!</h1>

    
    {/* Ternary operator */}
    {
      (state==true) ?  <RootComponent /> : <Component2 />
    }
    <button onClick={handleButtonClick}>Click!</button>
    

    {/* <div onClick={handleDivChange}>

    <form>
      <button onClick={handleChange}>click!</button>
    </form>
    </div> */}
    </>
  )
}

export default RootPage