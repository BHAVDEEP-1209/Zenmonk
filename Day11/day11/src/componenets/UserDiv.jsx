import React from 'react'

const UserDiv = (props) => {
  return (
    <div className='user_div'>
        <img src={props.state.img} alt="" />
        <div className="user_details_div">
            <h4 style={{marginBottom : "0"}}>{props.state.name}</h4>
            <h5 style={{marginTop : "5px"}}>{props.state.msg}</h5>
        </div>
    </div>
  )
}

export default UserDiv