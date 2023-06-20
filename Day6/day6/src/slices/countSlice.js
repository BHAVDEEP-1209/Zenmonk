import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  person : []
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    updateCount: (state,action)=>{
      state.tasks = [...state.tasks , action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateCount } = countSlice.actions

export default countSlice.reducer