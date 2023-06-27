// import React, { useEffect, useState } from 'react'
// import SenderComponent from "../componenets/SenderComponent";
// import ReceiverComponent from "../componenets/ReceiverComponent";
// import { useSelector } from 'react-redux';
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from '../firebase';
// import Message from './Message';

// const Messages = () => {
//     const [messages,setMessages] = useState([]);
//     const chatUser = useSelector(state=>state.chat.chatUser);
//     const chatId = useSelector(state=>state.chat.chatId);

//     useEffect(()=>{
//         if(chatId){
//             const dbRef = doc(db, "chats",chatId );
//         const unsub = onSnapshot(dbRef, (doc) => {
//             doc.exists && setMessages(doc.data().messages)
//         });

//         return ()=>{
//             unsub();
//         }
//         }
//     },[chatId]);



//   return (
//     <div className='messageContainer'>
//         {/* <SenderComponent />
//             <ReceiverComponent />
//             <SenderComponent />
//             <ReceiverComponent />
//             <SenderComponent />
//             <ReceiverComponent />
//             <SenderComponent />
//             <ReceiverComponent /> */}
//             {
//                 messages?.map((m)=>{
//                     return <Message message={m} key={m.id}/>
//                 })
//             }

//     </div>
//   )
// }

// export default Messages

import React from 'react'
import Message from './Message'
import { useSelector } from 'react-redux';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from "react"

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const chatId = useSelector(state => state.chat.chatId);

    useEffect(() => {
        if (chatId) {
            const dbRef = doc(db, "chats", chatId);
            const unsub = onSnapshot(dbRef, (doc) => {
                doc.exists && setMessages(doc.data()?.messages)
            });

            return () => {
                unsub();
            }
        }
    }, [chatId]);

    
    return (
        <div className='messages'>
            {
                messages?.map((m)=>{
                    return <Message message={m} key={m.id}/>
                })
            }
        </div>
    )
}

export default Messages