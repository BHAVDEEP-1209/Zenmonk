import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : {
    number : "",
    isLoggedIn : false
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValues : (state,action)=>{
        state.user.number = action.payload; 
        state.user.isLoggedIn = true; 
    },
    handleLogOut : (state)=>{
        state.user.number = ""; 
        state.user.isLoggedIn = false; 
    },
  },
})

// Action creators are generated for each case reducer function
export const { setValues , handleLogOut} = userSlice.actions

export default userSlice.reducer