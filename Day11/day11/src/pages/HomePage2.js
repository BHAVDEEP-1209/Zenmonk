import React from 'react'
import "../Styles/Homepage2.scss"
import SideBar from '../componenets/SideBar'
import Chat from '../componenets/Chat'

const HomePage2 = () => {
  return (
        <div className="home">
            <div className="container">
                <SideBar />
                <Chat /> 
            </div>
        </div>
  )
}

export default HomePage2