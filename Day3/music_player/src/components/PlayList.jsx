import React from 'react'
import data from "../Data/Data.json"

const PlayList = (props) => {

    const handleClick=(id)=>{
        const song = data.at(id).name;
        if(id!=props.state.currentSong){
            props.state.setCurrentSong(id);
        }
        props.state.setPlaySong(true);
    }
    console.log(props.state.currentSong);

  return (
    <div className='playlist_container'>
        <h1>
            My Playlist
        </h1>
        <table className="songslist_container">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
            </tr>
            </thead>
            <tbody>
                {
                    data.map((element)=>{
                        return <tr onClick={()=>{handleClick(element.id)}} id={element.id} key={element.id}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.artist}</td>
                        <td>{element.album}</td>
                    </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default PlayList