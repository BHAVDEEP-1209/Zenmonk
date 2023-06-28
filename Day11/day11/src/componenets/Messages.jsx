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
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from "react"

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const chatId = useSelector(state => state.chat.chatId);
    const chatUser = useSelector(state => state.chat.chatUser);
    const [chatRoomId,setChatRoomId] = useState(false);
    const [chatRoomId2,setChatRoomId2] = useState(false);
    const currentUser = useSelector(state=>state.user.currentUser);
    const dbRef = doc(db, "users", currentUser.uid);
    const otherId = chatId.substring(0,28);

    const clearChat=async()=>{
        const dRef = doc(db, "chats", chatId);
        await updateDoc(dRef, {
          messages: []
        })

        window.alert("chat cleared!");
    }

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

    useEffect(() => {
        if(chatUser.uid!=undefined){
            const dbRef = doc(db, "users", chatUser.uid);
            const unsub1 = onSnapshot(dbRef, (doc) => {
            if(doc.exists()){
                setChatRoomId(doc.data()?.chatId)
            }
            
        });
        
        const db2Ref = doc(db, "users", currentUser.uid);
        const unsub2 = onSnapshot(dbRef, (doc) => {
            if(doc.exists()){
                setChatRoomId2(doc.data()?.chatId)
            }
            
        });

        return () => {
            unsub1();
            unsub2();
        }
    }
}, [dbRef]);

console.log(currentUser.uid);
console.log(otherId);
  
    return (
        <>
        <button onClick={clearChat}>clear chat</button>
        <div className='messages'>
            {
                messages?.map((m,i)=>{
                    return <Message message={m} key={m.id} index={i}/>
                })
            }

            {
                chatRoomId && <>
                {
                    currentUser.uid!=otherId && <div  className={`message`}>
                    <div className="messageInfo">
                      <img src="https://images.unsplash.com/photo-1687561114607-4828b9997897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=374&q=80" alt="" />
                      
                    </div>
                    <div className="messageContent">
                        <p>"typing..."</p>
                    </div>
                  </div>
                }
                </>
            }
            {
                chatRoomId2 && <>
                {
                    currentUser.uid==otherId && <div  className={`message`}>
                    <div className="messageInfo">
                      <img src="https://images.unsplash.com/photo-1687561114607-4828b9997897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=374&q=80" alt="" />
                      
                    </div>
                    <div className="messageContent">
                        <p>"typing..."</p>
                    </div>
                  </div>
                }
                </>
            }

            {

            }
        </div>
        
        </>
    )
}

export default Messages