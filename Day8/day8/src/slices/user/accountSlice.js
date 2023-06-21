import { createSlice} from '@reduxjs/toolkit'
import {fetchUserById} from "../user/accountAction"

const initialState = {
  user  : {
    pending : false,
    error : "",
  }
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      if(state.user.amount==undefined){
        state.user.error = "Cannot increment amount is not present!"
      }else{
        state.user.amount += 1
      }
    },
    incrementByAmount: (state,action) => {
      const number = parseInt(action.payload)
      if(state.user.amount==undefined || !action?.payload){
        state.user.error = "Cannot increment!"
      }else{
        state.user.amount += number
      
      if(number>=100){
        state.user.points +=1;
      }
      }
      
    },
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      const temp = action.payload
      state.user = {...temp}
      state.user.error = ""
      state.user.pending = false
    })
    .addCase(fetchUserById.rejected, (state, action) => {
      state.user.error = "Invalid Id : No Data Found!"
      state.user.pending = false
    })
    .addCase(fetchUserById.pending, (state, action) => {
      state.user.pending = true
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment , incrementByAmount} = accountSlice.actions

export default accountSlice.reducer