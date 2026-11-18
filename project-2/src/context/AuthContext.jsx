import { createContext, useState } from "react";

export const AuthStore = createContext()


export const AuthProvider = ({children}) => {

    const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || [])

    return <AuthStore.Provider value={{registeredUsers, setRegisteredUsers}}>
        {children}
    </AuthStore.Provider>
}