
import axios from "axios"

const data = axios.create({
    baseURL: "https://fakestoreapi.com"
})

data.interceptors.response.use(

    (response) => {
        return response.data
    },

    (error) => {
        console.log("API Error:", error.message)
    }
)

export default data
