import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notes : []
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotes : (state,action)=>{
        state.notes = [...state.notes,action.payload];
    },
    deleteNotes : (state,action)=>{
      state.notes = state.notes.filter((ele,index)=>{
        return index!=action.payload
      })
    },
    updateNote : (state,action)=>{
      state.notes[action.payload.id] = action.payload.info
    }
  },
})

// Action creators are generated for each case reducer function
export const { addNotes , deleteNotes , updateNote} = notesSlice.actions

export default notesSlice.reducer