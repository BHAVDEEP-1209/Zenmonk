import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, getDoc , serverTimestamp, setDoc , updateDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setChatValue } from '../slices/chatSlice';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');
  const dispatch  = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSelect=async(e)=>{
    const selectUserId = e.target.id;
    const dbRef = doc(db, "users", selectUserId)
    const selectedUser = (await getDoc(dbRef)).data();
    
    const combinedId = user.uid > selectUserId ? user.uid + selectUserId : selectUserId + user.uid;
    try{
      const docRef = doc(db, "chats", combinedId);
      const res = await getDoc(docRef);

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), {
          messages : []
        });
        const washingtonRef = doc(db, "userChats", user.uid);
        await updateDoc(washingtonRef, {
          [combinedId+".userInfo"] :{
            uid : selectedUser.uid,
            displayName : selectedUser.displayName,
            photoURL : selectedUser.photoURL
          },
          [combinedId+".date"] : serverTimestamp()
        });
        const databaseRef = doc(db, "userChats", selectedUser.uid);
        await updateDoc(databaseRef, {
          [combinedId+".userInfo"] :{
            uid : user.uid,
            displayName : user.displayName,
          },
          [combinedId+".date"] : serverTimestamp()
        });
      }
    }catch(err){
      console.log(err);
    }
    dispatch(setChatValue({selectedUser,combinedId}));
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          onClick={handleSelect}
        >
          {
            props.state.map((ele)=>{
                return <MenuItem value={ele.uid} key={ele.uid} id={ele.uid}>{ele.displayName}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </Box>
  );
}