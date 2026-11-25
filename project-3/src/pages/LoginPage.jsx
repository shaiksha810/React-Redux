import axios from 'axios'
import { UserRound, LockKeyhole, ShoppingBag } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router'
import { addUser } from '../features/authSlice'
import useApi from '../apis/useApi'

const LoginPage = () => {

    const dispatch = useDispatch()
    const api = useApi()

    const [loginUser, setLoginUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setLoginUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const res = await api.post("/login", loginUser)
            dispatch(addUser(res.data))
            localStorage.setItem("accessToken", res.data.accessToken)
        } catch (error) {
            console.log(error.message)
        }


        setLoginUser({
            username: "",
            password: ""
        })
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:p-10">

                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <div className="bg-indigo-600 p-3 rounded-xl mb-4">
                        <ShoppingBag className="w-8 h-8 text-white" />
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm">
                        Login to continue shopping
                    </p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5">

                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>

                        <div className="relative">
                            <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={loginUser.username}
                                name='username'
                                onChange={handleChange}
                                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <div className="relative">
                            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                            <input
                                type='password'
                                name='password'
                                placeholder="Enter your password"
                                value={loginUser.password}
                                onChange={handleChange}
                                className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            />
                        </div>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md shadow-indigo-100"
                    >
                        Login
                    </button>

                </form>

                {/* Register Link */}
                <p className="text-center text-sm text-gray-500 mt-7">
                    Don't have an account?{' '}
                    <NavLink
                        to="/register"
                        className="text-indigo-600 font-semibold hover:text-indigo-700"
                    >
                        Create Account
                    </NavLink>
                </p>

            </div>
        </div>
    )
}

export default LoginPage
