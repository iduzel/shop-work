import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import demoReducer from './demoSlice'


export const store = configureStore({
    reducer:{
        user: userReducer,
        demo:demoReducer,
    },
})