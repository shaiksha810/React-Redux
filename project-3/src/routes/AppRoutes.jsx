import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import CartPage from '../pages/CartPage'
import OrdersPage from '../pages/OrdersPage'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import ShopPage from '../pages/ShopPage'
import useApi from '../apis/useApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'

const AppRoutes = () => {
    const api = useApi()
    const accessToken = localStorage.getItem("accessToken")
    const dispatch = useDispatch()

    useEffect(() => {

        const getUser = async() => {
                try {
                    const res = await api.get("/me", {
                        headers:{
                            "Authorization": `Bearer ${accessToken}`
                        }
                    })
                    dispatch(addUser(res.data))
                } catch (error) {
                    console.log("hydrate error", error);
                }
            }


            getUser()

        }, [])




    const routes = createBrowserRouter([
        {
            path: "/",
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <LoginPage />
                },
                {
                    path: "register",
                    element: <RegisterPage />
                },
            ]
        },
        {
            path: "/main",
            element: <MainLayout />,
            children: [

                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "about",
                    element: <AboutPage />
                },
                {
                    path: "cart",
                    element: <CartPage />
                },
                {
                    path: "orders",
                    element: <OrdersPage />
                },
                {
                    path: "products",
                    element: <ShopPage />
                }
            ]
        }
    ])




    return <RouterProvider router={routes} />
}

export default AppRoutes