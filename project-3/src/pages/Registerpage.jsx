import { useAuth } from "../../hooks/useAuth"

const Registerpage = () => {

  const {registerForm, handleSubmit, register, errors, navigate} = useAuth()


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">

      {/* Register Card */}
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">R</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Get started by creating your new account.
          </p>
        </div>

        {/* Register Form */}
        <form
         onSubmit={handleSubmit(registerForm)}
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
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
              {...register("name", {required:"Name is required"})}
            />
            {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
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
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
              {...register("email", {required:"Email is required"})}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
              {...register("password", {required:"Password is required"})}
            />
            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md shadow-indigo-100"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Already have an account?{' '}
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer text-indigo-600 font-semibold hover:text-indigo-700"
          >
            Sign In
          </button>
        </p>

      </div>
    </div>
  )
}

export default Registerpage
