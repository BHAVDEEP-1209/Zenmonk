import React from 'react'
// import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import icon from "../assets/music_icon.svg"

const Navbar = () => {
  return (
    <div className="nav_container">
        {/* <LibraryMusicIcon /> */}
        <img src={icon} alt="" />
        <div className="search">
        <SearchIcon className='searchIcon'/>
        <input type="text" name="" id="" placeholder='Search for music...'/>
        </div>
    </div>
  )
}

export default Navbar