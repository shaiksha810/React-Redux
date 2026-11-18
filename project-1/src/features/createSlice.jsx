import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state) => {
          state.count++
        },
        decrement:(state,actions) => {
          console.log(actions.payload)
          state.count--
        }
    }
})


export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer