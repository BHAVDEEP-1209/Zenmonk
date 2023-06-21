import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {fetchUserByIdInfo} from "../userInfo/userInfoAction"


const initialState = {
  info : {
    pending : false,
    error : "",
  },
  userInform : {}
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserByIdInfo.fulfilled, (state, action) => {
      state.userInform = action.payload;
      state.info.error = ""
      state.info.pending = false
      console.log(state.userInform);
    })
    .addCase(fetchUserByIdInfo.rejected, (state, action) => {
      state.info.error = "Invalid Id : No Data Found!"
      state.info.pending = false
    })
    .addCase(fetchUserByIdInfo.pending, (state, action) => {
      state.info.pending = true
    })
  },
})

// Action creators are generated for each case reducer function
export const { increment} = userInfoSlice.actions

export default userInfoSlice.reducer