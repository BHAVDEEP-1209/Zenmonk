import React from 'react'

const CompletedItems = (props) => {
  
  console.log(props.state)
  return (
    <>
    
   <div className='deletedContainer'>
      <h1>Completed Items!</h1>
      {
        props.state.map((element,ind)=>{
          return <h5 key={ind}>{element}</h5>
        })
      }
    </div>
    </>
  )
}

export default CompletedItems