import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated:false,
    },
    reducers:{
        addUser:(state, actions) => {
            state.user = actions.payload
            state.isAuthenticated = true
        }
    }
})

export const {addUser, addAccessToken} = authSlice.actions
export default authSlice.reducer