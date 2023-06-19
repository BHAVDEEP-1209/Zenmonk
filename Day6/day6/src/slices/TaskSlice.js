import { createSlice } from '@reduxjs/toolkit'
import data from "../Data/data.json"

const initialState = {
  users : [...data]
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    increment: (state,action) => {
     state.users[action.payload].userTask +=1 ;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment} = taskSlice.actions

export default taskSlice.reducer