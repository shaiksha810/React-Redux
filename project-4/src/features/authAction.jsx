import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";


export const loginUserAction = createAsyncThunk(
    "/api/auth",

    async (data, thunkApi) => {
        let dispatch = useDispatch()

        try {
            let response = await axios.post("https://dummyjson.com/auth/login", data)
            localStorage.setItem("accessToken", response.data.accessToken)
            dispatch(response.data)    
            return response.data
        } catch (error) {
            console.log("thunk error", error.message)
            return thunkApi.rejectWithValue("login failed")
        }

    })