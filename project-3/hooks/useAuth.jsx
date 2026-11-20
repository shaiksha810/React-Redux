import { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { addUser } from "../src/features/authSlice"


export const useAuth = () => {
    
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])
    const dispatch = useDispatch()

    // console.log(registeredUsers);
    
    
    
    const registerForm = (data) => {
        let arr = [...registeredUsers, data]
        setRegisteredUsers(arr)
        localStorage.setItem("registeredUsers", JSON.stringify(arr))
        toast.success("User register successfully")
        navigate("/")
    }

    const loginForm = (data) => {

        let user = registeredUsers.find((val) => val.email === data.email && val.password === data.password)

        if(!user) {
            toast.error("User not found")
            return
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user))
        dispatch(addUser(user))
        toast.success("User loggedIn successfully")
        navigate("/main")
    }

    return {
       register,
       handleSubmit,
       errors,
       reset,
       registerForm,
       loginForm,
       navigate
    }

    
}