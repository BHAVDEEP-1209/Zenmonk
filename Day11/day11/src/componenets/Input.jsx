import React, { useState } from 'react'
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from 'react-redux';
import {v4 as uuid} from "uuid";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Input = () => {
  const [text, setText] = useState("");
  const currentUser = useSelector(state => state.user.currentUser);
  const chatId = useSelector(state => state.chat.chatId);
  const chatUser = useSelector(state => state.chat.chatUser);

  const handleSend = async () => {
    const dRef = doc(db, "chats", chatId);
    await updateDoc(dRef, {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      })
    })
    const dbRef = doc(db, "userChats", currentUser.uid);
    await updateDoc(dbRef, {
      [chatId + ".lastMessage"]:{
        text
      },
      [chatId+".date"] : serverTimestamp()
    })
    // const dbRef2 = doc(db, "userChats",);
    // await updateDoc(dbRef2, {
    //   [chatId + ".lastMessage"]:{
    //     text
    //   },
    //   [chatId+".date"] : serverTimestamp()
    // })
    // for second user
    setText("");
  }

  const handleKey = (e)=>{
    console.log(e.code)
    e.code === "Enter" && handleSend();
  }

  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...' value={text} onChange={(e) => setText(e.target.value)} />
      <div className="send" onClick={handleSend} onKeyDown={handleKey}>
        <SendIcon className='sendIcon' />
      </div>
    </div>
  )
}

export default Input