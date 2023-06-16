import React from 'react'
import SignUpFrom from "../components/SignUpForm"
import design from "../assets/design.png"

const SignUp = () => {
  return (
    <div className="signup_div">
        <img src={design} className='design'/>
      <img src={design} className='design2'/>
        <div className="img_div">
            <img src="https://images.unsplash.com/photo-1686343100066-4d9b978be080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80" alt="" />
            {/* <img src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /> */}
        </div>
        <div className="signup-details_div">
            <SignUpFrom />
        </div>
    </div>
  )
}

export default SignUp