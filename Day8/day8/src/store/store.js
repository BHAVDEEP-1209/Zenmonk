import { configureStore , combineReducers } from '@reduxjs/toolkit'
import accountReducer from "../slices/user/accountSlice"
import userInfoReducer from "../slices/userInfo/userInfoSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { version } from 'react';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist:['account'],
  version : 2
}


const rootReducer = combineReducers({account:accountReducer , userInfo: userInfoReducer})

const myPersistReducer=persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: myPersistReducer,
})

export const persistor = persistStore(store)