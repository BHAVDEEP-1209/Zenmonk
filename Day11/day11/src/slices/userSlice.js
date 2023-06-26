import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : "",
  isLoggedIn : false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValue : (state,action)=>{
        state.user = action.payload;
        state.isLoggedIn = true;
    },
    handleLogOut : (state)=>{
        state.user = "";
        state.isLoggedIn = false;
    }
  },
})

export const { setValue , handleLogOut} = userSlice.actions

export default userSlice.reducer