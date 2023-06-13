import React from 'react'


const Profile = (props) => {
    return (
        <>
            {
                `
    Hello my name is ${props.user.name} 
    age : ${props.user.age}   
    gender : ${props.user.gender} 
    address : ${props.user.address}
    
    `

            }
            <br />
            <br />


        </>
    )
}

export default Profile