import { configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import demoReducer from './demoSlice'
import cartReducer from './cartSlice';


export const store = configureStore({
    reducer:{
        user: userReducer,
        demo:demoReducer,
        cart:cartReducer,
    },
})