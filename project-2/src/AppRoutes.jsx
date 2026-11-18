import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/reducers/createSlice";

const AppRoutes = () => {



    const dispatch = useDispatch()

    const hydration = () => {

        // console.log("hydrate user...");
        

        const loggedinUser = JSON.parse(localStorage.getItem("loggedInUser"))
        if(!loggedinUser){
            alert("UnAuthourized User")
            return
        }
        dispatch(addUser(loggedinUser))
    }

    hydration()


  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
