import {fetchDataInfo} from "../../service/auth"
import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {actionName} from "../userInfo/userInfoActionType"



export const fetchUserByIdInfo = createAsyncThunk(
    actionName,
  async (id, thunkAPI) => {
    console.log(id);
      const {data} = await fetchDataInfo(id)
      return data
  }
)