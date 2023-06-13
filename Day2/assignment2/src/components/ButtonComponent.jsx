import React from 'react'
import { Link } from 'react-router-dom'

const ButtonComponent = () => {
  return (
    <div className='buttonsDiv'>
    <button className='inputButton'><Link to="/deleted">Deleted Items</Link></button>
    <button className='inputButton'><Link to="/completed">Completed Items</Link></button>
    </div>
  )
}

export default ButtonComponent