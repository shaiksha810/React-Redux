import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AuthLayout = () => {
    
   const {user} = useSelector((store) => store.user)

   if(user){
    return <Navigate to={"/main"}/>
   }

  return <Outlet />
  
}

export default AuthLayout