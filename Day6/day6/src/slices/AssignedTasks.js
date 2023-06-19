import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  tasks : []
}

export const assignedTasks = createSlice({
  name: 'assignedTasks',
  initialState,
  reducers: {
    update: (state,action)=>{
      state.tasks = [...state.tasks , action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { update } = assignedTasks.actions

export default assignedTasks.reducer