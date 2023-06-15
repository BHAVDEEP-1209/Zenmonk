import React, { useEffect } from 'react'
import axios from "axios"

const Auth = (props) => {

  const url =  `https://api.openweathermap.org/data/2.5/weather?q=${props.state.cityName}&appid=2c3983e81031a8fa2a2728c29bdfc5bf`
 
  const fetchData = async()=>{
    props.state.setLoading(true);
    try{
      // const response = await axios.get(url);
      // props.state.setDataArray(response.data);
      

      axios.get(url)
      .then((response)=>{
        console.log(response.data)
        props.state.setDataArray(response.data);
        props.state.setLoading(false);
    }).catch((error)=>{
      window.alert("invalid name");
      props.state.setLoading(false);
    })
    }catch(error){
      console.log(error);
      console.log("api error!");
    }
    
  }

  useEffect(()=>{
    fetchData();
  },[props.state.cityName]);


  return (
    <></>
  )
}

export default Auth