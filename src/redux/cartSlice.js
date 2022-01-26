

import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { useContext } from 'react';
import DataContext from './dataContext';
// datatypes {prodId: 18, cnt: 2}
const initialValue ={
    products: [],
    cartContainer:{},
    orderID:new Date().getTime().toString()
}
export const cartSlice= createSlice({
    name:"cart",
    initialState:initialValue,
    reducers:{
        setProducts: (state, action)=>{
            state.products = action.payload;
            console.log('added products')
        },
       
        add2Cart: (state, action)=>{
            
            Object.keys(state.cartContainer).includes(action.payload.id)?
                state.cartContainer[action.payload.id] +=
                parseInt(action.payload.quantity)
                :
                state.cartContainer[action.payload.id] =parseInt(action.payload.quantity)
        }
    }

})

export const {setProducts,add2Cart} = cartSlice.actions
export const selectProducts = state => state.cart.products;
export const selectCart = state => state.cart.cartContainer;
export default cartSlice.reducer;
