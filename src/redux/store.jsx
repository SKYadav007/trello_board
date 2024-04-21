
import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './userSlice';
import  userlogout from "./userlogout"

export const store = configureStore({
   reducer: {
     user:userReducer,
     logout:userlogout
   },
}
);


