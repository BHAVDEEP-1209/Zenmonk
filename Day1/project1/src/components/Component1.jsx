import React from 'react'
import data from "../data/mock.json"
import Profile from './Profile'

const Component1 = () => {
    return (

        <>
            {
                data.map((element)=>{
                    return <Profile user={element} />
                    
                })
            }
        </>
    )
}

export default Component1