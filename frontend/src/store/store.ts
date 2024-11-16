
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import packageSlice from "./packageSlice";
import userProfileSlice from './userProfileSlice'
import workoutSlice from "./workoutSlice";


const store =configureStore ({
    reducer: {
        auth:authSlice,
        package:packageSlice,
        userProfile:userProfileSlice,
        workout:workoutSlice
       
    }
})
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState=ReturnType<typeof store.getState>