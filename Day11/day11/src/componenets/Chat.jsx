import React from 'react'
import CircleIcon from "@mui/icons-material/Circle";
import Messages from './Messages';
import Input from './Input';
import { useSelector } from 'react-redux';

const Chat = () => {
  const chatUser = useSelector(state=>state.chat.chatUser);
  return (
    <div className='chat'>
      <div className="chatInfo">
      <CircleIcon className='chatIcon' />
        <span>{chatUser.displayName}</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat