import React, { useEffect, useState } from 'react'
import CircleIcon from "@mui/icons-material/Circle";
import Messages from './Messages';
import Input from './Input';
import { useSelector } from 'react-redux';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const Chat = () => {
  const chatUser = useSelector(state=>state.chat.chatUser); 
  const [status,setStatus] = useState("");
  
  useEffect(()=>{
    const getStatus=async()=>{
      // console.log("function working!")
      // const docRef = doc(db, "users", chatUser.uid);
      // const docSnap = await getDoc(docRef);
     
      //   setStatus(docSnap.data()?.status);
      
       if(chatUser?.uid!=undefined){
        const dbRef = doc(db, "users", chatUser?.uid);
        const unsub = onSnapshot(dbRef, (doc) => {
          setStatus(doc.data()?.status);
        });

        return () => {
            unsub();
        }
       }
    }

    // chatUser && getStatus();
    getStatus();
  },[chatUser])

  return (
    <div className='chat'>
      <div className="chatInfo">
      {
        chatUser?.uid!=undefined && <div>
        <CircleIcon className={`${status=="online" ? "chatIcon" : "chatIcon2"}`} />
        <span>{chatUser.displayName}</span>
        <p className='status'>{status}</p>
        </div>
      }
      {
        chatUser?.uid == undefined && <span>Hello User!</span>
      }
        
      </div>
      <Messages />
      {
        chatUser?.uid!=undefined && <Input />
      }
    </div>
  )
}

export default Chat