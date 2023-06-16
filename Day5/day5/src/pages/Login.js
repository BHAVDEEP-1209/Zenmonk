import React from 'react'
import LoginForm from '../components/LoginForm'
import design from "../assets/design.png"

const Login = () => {
  return (
    <> 
    <div className="login_div">
      <img src={design} className='design'/>
      <img src={design} className='design2'/>
      <div className="img_div">
        <img src="https://images.unsplash.com/photo-1685068442274-465301c9a988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
      </div>
      <div className="details_div">
        <LoginForm />
      </div>
    </div>
    </>
  )
}

export default Login