import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import PublicRoute from './protectedroutes/PublicRoute'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainRoute from './protectedroutes/MainRoute'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/authSlice'
import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {

    let dispatch = useDispatch()

    let hydrateUser = async () => {

        const accessToken = localStorage.getItem("accessToken")
        try {
            let res = await axios.get("https://dummyjson.com/auth/me", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                },
            })
            // console.log("hydrate res:", res);
            dispatch(addUser(res.data))
        } catch (error) {
            console.log("hydrateUser api error: ", error.message);
        }
    }
    hydrateUser()


    const routes = createBrowserRouter([

        {
            path: "/",
            element: <PublicRoute />,
            children: [
                {
                    path: "",
                    element: <LoginPage />
                },
                {
                    path: "register",
                    element: <RegisterPage />
                }
            ]
        },

        {
            path: "/main",
            element: <MainRoute />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children:[
                        {
                            path:"",
                            element:<HomePage />
                        },
                        {
                            path: "about",
                            element: <AboutPage />
                        }
                    ]
                }]
        }
    
    
    ])







return <RouterProvider router={routes} /> 
}

export default AppRoutes