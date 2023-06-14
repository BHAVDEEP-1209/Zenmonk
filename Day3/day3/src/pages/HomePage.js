import React, { useEffect, useState } from 'react'
import Timer from '../components/Timer';

const HomePage = () => {
    const [count,setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    // 1. useEffect will run infinite times
    // useEffect(()=>{
    //     setCount((prev)=>{
    //         return prev+1;
    //     })
    // })

    // 2. only runs intialy then stops
    // useEffect(()=>{
    //     setCount((prev)=>{
    //         return prev+1;
    //     })
    // },[])

    // runs on when the value of dependency is changed
    // useEffect(()=>{
    //     setCalculation(count*2);
    // },[count])

    // const handleClick =()=>{
    //     setCount(count+1);
    // }

  return (
    <div className='homeDiv'>
        <h1>React Hooks</h1>
    {/* <h1>The multiple of {count} with 2 is : {calculation}</h1> */}
    
    {/* <button onClick={handleClick} className='btn'>Click</button> */}
    {/* <button onClick={handleDeleteClick} className='btn'>delete component</button> */}

    <Timer />

    </div>
  )
}

export default HomePage