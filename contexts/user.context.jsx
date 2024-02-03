'use client'

import { useRouter } from "next/navigation";

const { createContext, useState, useEffect } = require("react");

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    handleUserLogin: () => null,
    handleUserLogout: () => null,
    checkLocalUser: () => null,
})

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    
    const router = useRouter()

    const handleUserLogin = (user) => {

        setCurrentUser(user)
        localStorage.setItem('user', user)
        router.push('/schedule')
    }

    const handleUserLogout = () => {
        
        setCurrentUser(null)
        localStorage.removeItem('user')
        router.push('/')
    }

    const checkLocalUser = () => {
        const user = localStorage.getItem('user')

        if(user) {
            handleUserLogin(user)
        } else {
            handleUserLogout()
        }
    }

    useEffect(() => {
        checkLocalUser()
    }, [])


    const value = {
        currentUser, 
        setCurrentUser, 
        handleUserLogout, 
        handleUserLogin, 
        checkLocalUser
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}