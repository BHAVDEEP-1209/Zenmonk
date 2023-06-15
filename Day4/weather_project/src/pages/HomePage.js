import React, { useState } from 'react'
import MainCard from '../components/MainCard'
import Auth from '../service/Auth.service'

const HomePage = () => {

  const [dataArray,setDataArray] = useState([]);
  const [dateArray,setDateArray] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [cityName , setCityName] = useState('kolkata')
  return (
    <>
    <Auth state={{dataArray,setDataArray,dateArray,setDataArray,setLoading,cityName}}/>
    <MainCard state={{dataArray,isLoading,setCityName}}/>
    </>
  )
}

export default HomePage