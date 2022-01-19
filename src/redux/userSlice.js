import {createSlice} from "@reduxjs/toolkit"


const initialValue = {
    name: "aaaa"
}


export const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers:{
        setName: (state, action) =>{
            state.name = action.payload
        },
        resetName: (state) =>{
            state.name=""
        }
    }

})


export const {setName, resetName} = userSlice.actions;
export const selectUser = () => userSlice.name;
export default userSlice.reducer;