import React from 'react'
import { useParams } from 'react-router-dom'

const DeletedItems = (props) => {
  
  return (
    <div className='deletedContainer'>
      <h1>Deleted Items!</h1>
      {
        props.state.map((element,ind)=>{
          return <h5 key={ind}>{element}</h5>
        })
      }
    </div>
  )
}

export default DeletedItems