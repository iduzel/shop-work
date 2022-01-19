import {createSlice} from "@reduxjs/toolkit"


const initialValue = {
    name: "",
    email:""
   
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
        },
        setEmail: (state, action) =>{
            state.email = action.payload
        }
    }

})


export const {setName, resetName,setEmail} = userSlice.actions;
export const selectUser = state => state.user.name;
export const selectEmail = state =>state.user.email;
export default userSlice.reducer;