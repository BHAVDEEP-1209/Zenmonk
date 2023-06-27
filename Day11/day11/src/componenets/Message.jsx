import React from 'react'
import { useSelector } from 'react-redux'
import SenderComponent from './SenderComponent';
import ReceiverComponent from './ReceiverComponent';


const Message = (message) => {
    const user = useSelector(state=>state.user.user);
    const chatUser = useSelector(state=>state.chat.chatUser);
    const chatId = useSelector(state=>state.chat.chatId);

    console.log("message",message);
  return (
    <div className={`message`}>
       
        
    {
            message.message.senderId === user.uid ?  <ReceiverComponent message={message}/> : <SenderComponent message={message}/>
        }

</div>
    
  )
}

export default Message