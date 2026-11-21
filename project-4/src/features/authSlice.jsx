import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction } from "./authAction";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        isAuthenticated: false,
        isLoading:false
    },
    // reducers:{
    //     addUser:(state, actions) => {
    //         state.user = actions.payload
    //         state.isAuthenticated = true
    //     },
    //     removeuser:(state) => {
    //         state.user = null,
    //         state.isAuthenticated = false
    //     }
    // }
    extraReducers: (builder) => {

        builder.addCase(loginUserAction.pending, (state, action) => {
            state.isLoading = true;
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
            })
            .addCase(loginUserAction.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
})


export const { addUser, removeuser } = authSlice.actions
export default authSlice.reducer