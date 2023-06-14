import React, {  useState } from 'react'
import data from  "../Data/Data.json"


const Hero = () => {
    const [date,setDate] = useState(new Date());
  return (
    <>
    <div className="hero_div">
        <h1>Trending!..</h1>
          <div className="card">
            <p>Artist</p>
            <h1>On Top Of The World</h1>
            <div className="card_bottom">
                <button className='play_button'>PLAY</button>
                <h4>{date.toLocaleDateString()}</h4>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Hero