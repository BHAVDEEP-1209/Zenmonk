import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chatUser : {
  },
  chatId : ""
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChatValue : (state,action)=>{
        state.chatUser = action.payload.user;
        state.chatId = action.payload.combinedId;
    },  
  },
})

export const {setChatValue} = chatSlice.actions

export default chatSlice.reducer