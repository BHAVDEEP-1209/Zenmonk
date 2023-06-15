import React, { useEffect, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Space, Typography, Button } from "antd";
import { Input } from 'antd';
import fetchData from '../../src/service/Auth.service'

const { Text, Link } = Typography;
const MainCard = (props) => {


  const [inputCity,setInputCity] = useState('');

  const handleChange = (e)=>{
    setInputCity(e.target.value);
  }

  const handleClick=()=>{
    props.state.setCityName(inputCity);
    setInputCity('');
  }

  return (
      <>
    {
      props.state.isLoading==false && 
   
    <div className="custom_card">
      <div className="img_div">
        <div className="header">
          <Space direction="vertical">
          <Text className="smallest_text">Today's Weather</Text>
            <Text className="text">
              {(props.state.dataArray.main.temp*0.10).toFixed(2)} &#176;
            </Text>
            <Text className="small_text"></Text>
            <div className="info1">
              <Button type="primary" className="btn">
                long
              </Button>
              <Text className="smallest_text">{props.state.dataArray.coord.lon} &#176;</Text>
            </div>
            <div className="info">
              <Button type="primary" className="btn">
                lat
              </Button>
              <Text className="smallest_text">{props.state.dataArray.coord.lat} &#176;</Text>
            </div>
            <div className="info">
              <Button type="primary" className="btn">
                wind
              </Button>
              <Text className="smallest_text">deg:{props.state.dataArray.wind.deg} &#176;  speed:{props.state.dataArray.wind.speed}</Text>
            </div>
            <div className="info">
              <Button type="primary" className="btn">
                description
              </Button>
              <Text className="smallest_text description">{(props.state.dataArray.weather[0].description).toUpperCase()}</Text>
            </div>
          </Space>
          
        </div>
        <div className="header_right">
        <LocationOnIcon sx={{fontSize: 30}}/>
        <Text className="small_text">{props.state.dataArray.name},{props.state.dataArray.sys.country}</Text>
        </div>
      </div>
      <div className="footer">
        <Input placeholder="enter the city name" value={inputCity} onChange={handleChange} className="input_city"/>
        <Button type="primary" className="btn" onClick={handleClick}>search</Button>
      </div>
      <div>
        <img src={`http://openweathermap.org/img/w/${props.state.dataArray.weather[0].icon}.png`} alt="" />
        </div>  
    </div>
    
  }
  </>
  );
};

export default MainCard;
