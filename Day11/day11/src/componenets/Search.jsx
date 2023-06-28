import React, { useState } from 'react'
import { collection, query, where, getDocs, getDoc, setDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase';
import { useSelector } from 'react-redux';

const Search = () => {
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(null);
    const currentUser = useSelector(state => state.user.currentUser);

    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", userName));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            console.log("error searching!", err);
        }
    }

    const handleKey =  (e) => {
        e.code === "Enter" && handleSearch();
    }

    const handleSelect = async() => {
        const combinedId = currentUser.uid > user?.uid ? currentUser.uid + user?.uid : user?.uid + currentUser.uid;
        console.log("user clicked!")
        try {
            const docRef = doc(db, "chats", combinedId);
            const res = await getDoc(docRef);

            if (!res.exists()) {
                await setDoc(doc(db, "chats", combinedId), {
                    messages: []
                });
                const washingtonRef = doc(db, "userChats", currentUser.uid);
                await updateDoc(washingtonRef, {
                    [combinedId + ".userInfo"]: {
                        uid: user?.uid,
                        displayName: user?.displayName,
                        // photoURL: user?.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
                const databaseRef = doc(db, "userChats", user?.uid);
                await updateDoc(databaseRef, {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        // photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });
            }
        } catch (err) {
            console.log("error while selecting!", err);
        }

        setUser(null);
        setUserName("");
    }

    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" name="" id="" placeholder='Type SomeThing...' value={userName} onChange={(e) => {
                    setUserName(e.target.value);
                    setUser(null)
                }
                } onKeyDown={handleKey} />
            </div>
            {
                user &&
                <div className="userChat" onClick={handleSelect}>
                    <img src="https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                    {/* <img src={user.photoURL} alt="" /> */}
                    <div className="userChatInfo">
                        <span>{user.displayName}</span>
                    </div>
                </div>
            }

        </div>
    )
}

export default Search