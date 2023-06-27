// import React from 'react'
// import { useSelector } from 'react-redux'
// import SenderComponent from './SenderComponent';
// import ReceiverComponent from './ReceiverComponent';


// const Message = (message) => {
//     const user = useSelector(state=>state.user.user);
//     const chatUser = useSelector(state=>state.chat.chatUser);
//     const chatId = useSelector(state=>state.chat.chatId);

//     console.log("message",message);
//   return (
//     <div className={`message`}>


//     {
//             message.message.senderId === user.uid ?  <ReceiverComponent message={message}/> : <SenderComponent message={message}/>
//         }

// </div>

//   )
// }

// export default Message

import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const Message = ({message}) => {
  const currentUser = useSelector(state=>state.user.currentUser);
  const ref = useRef();

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior: "smooth"})
  },[message])

  
  return (
    <div ref={ref} className={`message ${message.senderId==currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1687561114607-4828b9997897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=374&q=80" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
          <p>{message.text}</p>
      </div>
    </div>
  )
}

export default Message