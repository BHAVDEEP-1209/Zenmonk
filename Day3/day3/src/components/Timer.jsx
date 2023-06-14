import React, { useState } from 'react'

const Timer = () => {
    const [timer,setTimer] = useState(new Date());
  return (
    <>
    <h1>{timer.toLocaleDateString}</h1>
    </>
  )
}

export default Timer