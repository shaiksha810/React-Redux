import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/createSlice"


export const store = configureStore({
    reducer:{
        counter:counterSlice
    }
})