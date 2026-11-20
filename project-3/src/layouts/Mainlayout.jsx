import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../../components/Navbar'

const Mainlayout = () => {
  
   let loggedInUser = useSelector((store) => store.auth)
   let user = loggedInUser.user
   

   if(!user){
    return <Navigate to={"/"}/>
   }

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
)
}

export default Mainlayout