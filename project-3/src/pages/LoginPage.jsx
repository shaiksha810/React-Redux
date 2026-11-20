import { useAuth } from "../../hooks/useAuth"

const LoginPage = () => {

  const {loginForm, handleSubmit, register, errors, navigate} = useAuth()


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">

      {/* Login Card */}
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold">L</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            Please enter your details to sign in.
          </p>
        </div>

        {/* Login Form */}
        <form
        onSubmit={handleSubmit(loginForm)}
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
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
            {...register("email", {required:"Email is required"})}
            />
            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
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
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400"
              {...register("password", {required:"password is required"})}
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md shadow-indigo-100"
          >
            Sign In
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-7">
          Don't have an account?{' '}
          <button
            onClick={() => navigate("/register")}
            className="cursor-pointer text-indigo-600 font-semibold hover:text-indigo-700"
          >
            Create an account
          </button>
        </p>

      </div>
    </div>
  )
}

export default LoginPage
