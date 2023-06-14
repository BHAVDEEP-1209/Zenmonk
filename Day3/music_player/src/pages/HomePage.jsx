import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PlayList from '../components/PlayList'
import AudioPlayer from '../components/AudioPlayer'

const HomePage = () => {
  const [playSong, setPlaySong] = useState(false);
  const [currentSong,setCurrentSong] = useState(0);

  return (
    <>
    
    <div className="homepage_div">
    <Navbar />
    <Hero />
    <PlayList state={{setPlaySong,currentSong,setCurrentSong}}/>
    <AudioPlayer state={{playSong,setPlaySong,setCurrentSong,currentSong}}/>
    </div>
    </>
  )
}

export default HomePage