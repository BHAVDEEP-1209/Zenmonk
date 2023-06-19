import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "../slices/TaskSlice.js"
import assignedTaskReducer from "../slices/AssignedTasks.js"

export const store = configureStore({
  reducer: {
    task : taskReducer,
    assignedTasks : assignedTaskReducer,
  },
})