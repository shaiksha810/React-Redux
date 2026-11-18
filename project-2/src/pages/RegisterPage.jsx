import { useContext} from 'react'
import { useForm } from 'react-hook-form'
import { NavLink} from 'react-router'
import { AuthStore } from '../context/AuthContext'

const RegisterPage = () => {

    
    const {register, handleSubmit, reset, formState:{errors}} = useForm()
    
    const {registeredUsers, setRegisteredUsers} = useContext(AuthStore)


  const handleRegister = (data) => {
     
    const userData = [...registeredUsers, data]
    setRegisteredUsers(userData)
    localStorage.setItem("registeredUsers", JSON.stringify(userData))
    reset()

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">

      {/* Register Card */}
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Please fill in your details to register.
          </p>
        </div>

        {/* Register Form */}
        <form 
        onSubmit={handleSubmit(handleRegister)}
        className="space-y-5">

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              {...register("name", {required:"Name is required"})}
            />
            {errors.name && <p className='text-red-500'>errors.name.message</p>}
          </div>

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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            {...register("password", {required:"Password is required"})}
            />
            {errors.password && <p className='text-red-500'>errors.password.message</p>}
          </div>

          {/* Register Button */}
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-7">
          Already have an account?{' '}
          <NavLink
            to={"/"}
            className="text-blue-600 font-semibold hover:text-blue-700"
          >
            Sign In
          </NavLink>
        </p>

      </div>
    </div>
  )
}

export default RegisterPage
