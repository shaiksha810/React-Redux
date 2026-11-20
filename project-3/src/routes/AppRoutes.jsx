import { createBrowserRouter, RouterProvider } from "react-router";
import Authlayout from "../layouts/Authlayout";
import Mainlayout from "../layouts/Mainlayout";
import Homepage from "../pages/Homepage";
import Registerpage from "../pages/Registerpage"
import LoginPage from "../pages/LoginPage"
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import AboutPage from "../pages/AboutPage";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";

const AppRoutes = () => {

  const dispatch = useDispatch()

  const hydrateUser = () => {

    const loggedinUser = JSON.parse(localStorage.getItem("loggedInUser"))

    // console.log(loggedinUser);
    

    if(!loggedinUser) {
       toast.error("UnAuthourized User")
       return
    }

    dispatch(addUser(loggedinUser))

  }


  hydrateUser()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authlayout />,
      children: [
        {
            path:"",
            element:<LoginPage/>
        },
        {
          path: "register",
          element: <Registerpage />,
        },
      ]
    },
    {
      path: "/main",
      element: <Mainlayout />,
      children: [
        {
          path: "",
          element: <Homepage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        }
      ]
    }

  ]);


  return <RouterProvider router={router}/>
};

export default AppRoutes;
