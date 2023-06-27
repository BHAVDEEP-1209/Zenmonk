import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : {
    displayName : "",
    uid : "",
    img : "",
    email : ""
  },
  isLoggedIn : false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValue : (state,action)=>{
        state.user.displayName = action.payload.displayName;
        state.user.uid = action.payload.uid;
        state.user.img = action.payload.photoURL;
        state.isLoggedIn = true;
        state.user.email = action.payload.email; 
    },
    handleLogOut : (state)=>{
        state.user = "";
        state.isLoggedIn = false;
    }
  },
})

export const { setValue , handleLogOut} = userSlice.actions

export default userSlice.reducer