import { configureStore , combineReducers} from '@reduxjs/toolkit'
import userReducer from "../slices/userSlice"
import resumeReducer from "../slices/resumeSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { useSelector } from 'react-redux';

// const number 

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({user : userReducer,resume : resumeReducer })
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    reducer : persistedReducer
  },
})


export const persistor = persistStore(store)