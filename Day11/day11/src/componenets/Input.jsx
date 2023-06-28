import React, { useEffect, useState } from 'react'
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from 'react-redux';
import {v4 as uuid} from "uuid";
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import EmojiPicker from 'emoji-picker-react';
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";

const Input = () => {
  const [text, setText] = useState("");
  const currentUser = useSelector(state => state.user.currentUser);
  const chatId = useSelector(state => state.chat.chatId);
  const chatUser = useSelector(state => state.chat.chatUser);
  const [showEmojis,setShowEmojis] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("-"); 
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setText(text + emoji);
  };

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
    setShowEmojis(false);
  }

  const handleKey = (e)=>{
    e.code === "Enter" && handleSend();
  }

  const handleChange = async(e)=>{
    setText(e.target.value);
    setTimeout(()=>{
      const setTyping = async()=>{
          await updateDoc(doc(db, "users", currentUser.uid), {
          chatId : false
        });
      }

      setTyping();
    },[2000])
    await updateDoc(doc(db, "users", currentUser.uid), {
      chatId : true,
    });
  }

  useEffect(()=>{
    const setTyping = async()=>{
      await updateDoc(doc(db, "users", currentUser.uid), {
        chatId : false,
      });
    }

    setTyping();
  },[])

  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...' value={text} onChange={handleChange} onKeyDown={handleKey}/>
      <SentimentSatisfiedAltIcon className='emojiIcon' onClick={() => setShowEmojis(!showEmojis)} />

          {showEmojis && (
            <div className='emojiDiv'>
              <EmojiPicker onEmojiClick={addEmoji} />
            </div>
          )}
      <div className="send" onClick={handleSend} >
        <SendIcon className='sendIcon' />
      </div>
    </div>
  )
}

export default Input