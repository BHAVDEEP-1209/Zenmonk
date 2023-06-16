import React from 'react'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import HomePage from '../pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Profile from '../pages/Profile'

const Root = () => {
  return (
    <>
    {/* <Login /> */}
    {/* <SignUp /> */}
    <Routes>
      <Route path="/login" element={<Login /> } />
      <Route path="/" element={<SignUp /> } />
      <Route path="/profile" element={<Profile /> } />
      <Route path="/homepage" element={<HomePage /> } />
      <Route path="*" element={<h1>page not found!</h1> } />
    </Routes>
    </>
  )
}

export default Root