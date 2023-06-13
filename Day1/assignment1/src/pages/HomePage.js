import React from 'react'
import data from "../data/data.json"
import Product from '../components/Product'
import { useState } from 'react'



const HomePage = () => {
  const [message,setMessage] = useState("");
  const [array,setArray] = useState(data);

  const handleClick = ()=>{
    setMessage("");
    getProducts(message);
  }

  const handleChange = (event)=>{
    setMessage(event.target.value);

  }


  function getProducts(name){
    if(!name){
      setArray(data);
    }else{
      const temparray = data.filter(item=> item.name===message);
      console.log(temparray)
      setArray(temparray);
    }
  }

  return (
    <>
    <div className='header'>
      <h1>Shopify</h1>
      <div>
      <input className='search' placeholder='Search Item' onChange={handleChange} value={message} />
      <button className='btn' onClick={handleClick}>search</button>
      </div>
    </div>
      <div className='container'>
      {
        array.map((element)=>{
            return <Product item={element} key={element.name}/>
        })
    }

    
      </div>
    
    
    </>
  )
}

export default HomePage