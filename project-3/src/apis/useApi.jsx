import axios from 'axios'
import React from 'react'

const useApi = () => {

    const api = axios.create({
        baseURL:"https://dummyjson.com/auth"
    })



    api.interceptors.response.use(
        (config) => {
            return config
        },
        (error) => {
            return error
        }
    )


    return api

}

export default useApi