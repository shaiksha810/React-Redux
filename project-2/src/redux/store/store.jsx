import { configureStore } from "@reduxjs/toolkit"
import authUser from "../reducers/createSlice"


export const store = configureStore({
    reducer:{
      user:authUser
    }
})