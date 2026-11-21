// import axios from "axios"
// import { useForm } from "react-hook-form"
// import { useNavigate } from "react-router"


// export const useAuth = () => {

//   const navigate = useNavigate()
//   const {reset, handleSubmit, register, formState:{errors}} = useForm()

//   const loginForm = async(data) => {

//     try {
//         let response = await axios.post("https://dummyjson.com/auth/login", data)
//         console.log(response);    
//         reset()
//     } catch (error) {
//         console.log("api error:", error.message)
//     }


//   }



//   return {
//     handleSubmit,
//     register,
//     errors,
//     loginForm,
//     navigate
//   }

// }