import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const MainRoute = () => {
    let {user} = useSelector((store) => store.auth)

    if(!user) {
        return <Navigate to={"/"}/>
    }
 return <MainLayout />
}

export default MainRoute