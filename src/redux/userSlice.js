import {createSlice} from "@reduxjs/toolkit"


const initialValue = {
    email: "",
    password:"",
    username:"",
    remember:false
}
// const setUser =(username,email, password) =>{
//     if(sessionStorage.getItem(email)){
       
//     }
//     else{
//          sessionStorage.setItem (email,{username:username,
//         email:email,
//     password:password})
//     }
    
// }

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
        setRemember: (state)=>{
            state.remember = !state.remember;
        },
       
        setPassword: (state, action) =>{
            state.password = action.payload
        },
        setUser: (state, action)=>{
            
                            state.email = action.payload.email;
                            state.password = action.payload.password;
                            state.username = action.payload.name;

                                localStorage.setItem ( "currentUser",JSON.stringify({
                                    username:action.payload.name,
                                email:action.payload.email,
                            password:action.payload.password}))

        }
        ,

        logout: (state)=>{
            if(state.email!==""){
                if(!state.remember){
                    localStorage.removeItem(state.email)
                }
            
            state.email = "";
            state.username="";
            state.password="";
            }
           
            
        }
    }

})


export const {setEmail,  setUser,setRemember, setPassword, logout} = userSlice.actions;
export const selectEmail = state => state.user.email;
export const selectPassword = state =>state.user.password;
export const selectUsername = state => state.user.username
export const selectRemember = state => state.user.remember;
export default userSlice.reducer;