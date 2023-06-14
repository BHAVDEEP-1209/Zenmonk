import React, { useEffect, useRef } from 'react'
import play from "../assets/play.svg"
import next from "../assets/next.svg"
import previous from "../assets/previous.svg"
import pause from "../assets/pause.svg"
import sound from "../assets/sound.svg"
import mute from "../assets/mute.svg"
// import song from "../assets/songs/sidhu.mp3"
import data from "../Data/Data.json"

import { useState } from 'react'

const AudioPlayer = (props) => {
  const [rangeValue, setRangeValue] = useState(100);
  const [silent,setSilent] = useState(false);

   
    const audiorem = useRef()

    useEffect(()=>{
      if(props.state.playSong==true){
        audiorem.current.play()
        // setSongPlaying()
      }  
    },[props.state])


    const handleClick=()=>{
        //  {
        //     !songPlaying ? audiorem.current.play() : audiorem.current.pause()
        //  }
         {
            !props.state.playSong ? audiorem.current.play() : audiorem.current.pause()
         }
        //  setSongPlaying(!songPlaying);
        props.state.setPlaySong((prev)=>{
          return !prev;
        })
    }
    const song = require(`../../src/assets/songs/${props.state.music}`)


    //seeting up range

    const handleChange=(event)=>{
      setRangeValue(event.target.value);
      // console.log(rangeValue)

      const tempValue = rangeValue * 0.010;
      audiorem.current.volume = tempValue;
      // audiorem.current.volume = 1;
      
    }

    const handleSilent = ()=>{
      setSilent(!silent);
      {
        !silent ?  audiorem.current.muted = true: audiorem.current.muted = false; 
      }
    }

    const handlePrevious=()=>{
        if(props.state.currentSong!=-1){
          props.state.setCurrentSong((prev)=>{
            return prev-1;
      })
      props.state.setMusic(data.at(props.state.currentSong).name);
      props.state.setPlaySong(true);
        } 
    }
    const handleNext=()=>{
        if(props.state.currentSong!=data.length){
          props.state.setCurrentSong((prev)=>{
            return prev+1;
      })
      props.state.setMusic(data.at(props.state.currentSong).name);
      props.state.setPlaySong(true);
        } 
    }

    
  return (
    <div className="audtioplayer_div">
      <div className="controls">
        <audio src={song}  ref={audiorem} />

        <img src={previous} alt="" className='previous_icon' onClick={handlePrevious}/>
        { 
            // songPlaying ? <img src={pause} alt="" className='play_icon' onClick={handleClick}/> : <img src={play} alt="" onClick={handleClick } className='play_icon'/>
            props.state.playSong ? <img src={pause} alt="" className='play_icon' onClick={handleClick}/> : <img src={play} alt="" onClick={handleClick } className='play_icon'/>
        }
        <img src={next} alt="" 
        className='next_icon' onClick={handleNext}/>
        
      </div>
      {
        !silent ? <img src={sound} alt="" className='sound_icon' onClick={handleSilent}/> :
         <img src={mute} alt=""  className='sound_icon' onClick={handleSilent} /> 
      }
      <input type="range" name="" id="" value={rangeValue} onChange={handleChange} />
      
    </div>
  )
}

export default AudioPlayer