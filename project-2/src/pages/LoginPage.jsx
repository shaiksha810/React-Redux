import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router'
import { AuthStore } from '../context/AuthContext'
import { useDispatch } from "react-redux"
import { addUser } from '../redux/reducers/createSlice'

const LoginPage = () => {

  const {register, handleSubmit, reset, formState:{errors}} = useForm()
  const {registeredUsers} = useContext(AuthStore)
  const dispatch = useDispatch()
  
  const handleLogin = (data) => {

      const user = registeredUsers.find((val) => val.email === data.email && val.password === data.password)
      if(!user){
          alert("Invalid Credentials or User not found")
          reset()
          return
        }
        
        localStorage.setItem("loggedInUser", JSON.stringify(user))
        dispatch(addUser(user))
        reset()

  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back!
          </h1>
          <p className="text-gray-500 mt-2">
            Please enter your details to sign in.
          </p>
        </div>

        {/* Login Form */}
        <form
        onSubmit={handleSubmit(handleLogin)} 
         className="space-y-5">

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
             {...register("email", {required:"Email is required"})}
            />
            {errors.email && <p className='text-red-500'>errors.email.message</p>}
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
            </div>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
             {...register("password", {required:"password is required"})}
            />
            {errors.password && <p className='text-red-500'>errors.password.message</p>}
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-7">
          Don't have an account?{' '}
          <NavLink
            to={"/register"}
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Create an account
          </NavLink>
        </p>

      </div>
    </div>
  )
}

export default LoginPage
