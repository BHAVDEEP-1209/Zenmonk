import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "../slices/TaskSlice.js"
import assignedTaskReducer from "../slices/AssignedTasks.js"
import countReducer from "../slices/countSlice.js"

export const store = configureStore({
  reducer: {
    task : taskReducer,
    assignedTasks : assignedTaskReducer,
    count : countReducer
  },
})