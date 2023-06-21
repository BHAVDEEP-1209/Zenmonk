import fetchData from "../../service/auth"
import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { actionName } from "./accountActionName"

export const fetchUserById = createAsyncThunk(
  actionName,
    async (id, thunkAPI) => {
      console.log("fetching user!");
        const {data} = await fetchData(id)
        return data
    }
  )