import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const Authlayout = () => {

   let loggedInUser = useSelector((store) => store.auth)
   let user = loggedInUser.user
   

   if(user){
    return <Navigate to={"/main"}/>
   }

  return <Outlet />
}

export default Authlayout