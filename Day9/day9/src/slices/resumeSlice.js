import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  resumes : [],
}

export const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setResumeInitialValues : (state,action)=>{
        state.resumes = action.payload;
    },
    setResumeValue : (state,action)=>{
      console.log(action.payload);
      state.resumes.push(action.payload);
      
    },
    deleteItem : (state,action)=>{
      state.resumes.splice(action.payload,1);
    },
    deleteEditedItem : (state,action)=>{
      state.resumes = state.resumes.filter((ele)=>{
        return ele.id != action.payload;
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { setResumeInitialValues , setResumeValue , deleteItem , deleteEditedItem} = resumeSlice.actions

export default resumeSlice.reducer