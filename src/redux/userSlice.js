import {createSlice} from "@reduxjs/toolkit"


const initialValue = {
    email: "",
    password:"",
    username:""
}
const setUser =(username,email, password) =>{
    if(sessionStorage.getItem(email)){
       
    }
    else{
         sessionStorage.setItem (email,{username:username,
        email:email,
    password:password})
    }
    
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialValue,
    reducers:{
       
        setEmail: (state, action) =>{
            state.email = action.payload
        },
         setUsername: (state, action) =>{
            state.username = action.payload
        },
       
        setPassword: (state, action) =>{
            state.password = action.payload
        },

        logout: (state)=>{
            state.email = "";
            state.username="";
            state.password="";
        }
    }

})


export const {setEmail, setUsername,setPassword, logout} = userSlice.actions;
export const selectEmail = state => state.user.email;
export const selectPassword = state =>state.user.password;
export const selectUsername = state => state.user.username
export default userSlice.reducer;