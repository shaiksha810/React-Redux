import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const MainLayout = () => {

   const {user} = useSelector((store) => store.user)

   if(!user){
    return <Navigate to={"/"}/>
   }

  return <Outlet />
  
}

export default MainLayout