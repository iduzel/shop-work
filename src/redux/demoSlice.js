

import {createSlice} from "@reduxjs/toolkit"


const initialValue = {
    counter:0
   
}


export const demoSlice = createSlice({
    name: 'demo',
    initialState: initialValue,
    reducers:{
        setCounter: (state, action) =>{
            state.counter = action.payload
        },
        plusCounter:(state) => {
            state.counter = state.counter + 1
        },
        minusCounter:(state) => {
            state.counter = state.counter - 1
        }


      
    }

})


export const {setCounter, plusCounter, minusCounter} = demoSlice.actions;
export const selectCounter = state => state.demo.counter;

export default demoSlice.reducer;