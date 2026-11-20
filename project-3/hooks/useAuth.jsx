import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { addUser } from "../src/features/authSlice"
import data from "../src/config/api"


export const useAuth = () => {
    
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])
    const dispatch = useDispatch()

    const [productsData, setProductsData] = useState([])
    const [category, setCategory] = useState("all")

    const [filterData, setFilterData] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const getProducts = async () => {

    try {
            const products = await data.get("/products")
            setProductsData(products)
            setIsLoading(false)

        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        getProducts()
    }, [])


    let categoryData = productsData.filter((elem) => {
        if (category === "all") return productsData
        return elem.category === category
    })
    .filter((fil) => {
        if (fil.title === undefined) return productsData
        return fil.title.toLowerCase().includes(filterData)
    })

    
    
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
       navigate,
       setCategory,
       setFilterData,
       categoryData,
       isLoading
    }

    
}