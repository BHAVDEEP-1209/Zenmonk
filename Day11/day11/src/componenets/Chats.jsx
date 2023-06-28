import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { setChatValue } from '../slices/chatSlice';
import CircleIcon from "@mui/icons-material/Circle";

const Chats = () => {
    const [chats, setChats] = useState([]);
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            }
        }

        currentUser.uid && getChats();
    }, [currentUser.uid])

    const handleSelect=(user)=>{
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
        dispatch(setChatValue({combinedId,user}));
    }

    console.log(Object.entries(chats));
    return (
        <div className='chats'>
            {
                Object.entries(chats)?.sort((a,b)=>b[1].date-a[1].date).map((chat) => {

                    return <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1]?.userInfo)}>
                        <img src="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <div className="userChatInfo">
                            <span>{chat[1]?.userInfo.displayName}</span>
                            {/* <CircleIcon className='statusIcon'/> */}
                            <p>{chat[1].lastMessage?.text}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Chats