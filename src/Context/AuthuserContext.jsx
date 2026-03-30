import { onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { _Auth } from '../Backend/BackendBass'
import toast from 'react-hot-toast'
export let authuser = createContext()

const AuthuserContext = ({ children }) => {
    let [userData, setUserData] = useState(null)
    function logout() {
        signOut(_Auth)
        setUserData(null)
        toast.success('Logged Out')
        console.log(userData)
        // window.location.assign("")

    }
      useEffect(()=>{
        const unsubscribe=onAuthStateChanged(_Auth, (useData) => {
        if (useData?.emailVerified == true) {
            setUserData(useData)
        }
        else {
            setUserData(null)
        }
    })
    return ()=>unsubscribe
}) 
    return (
        <authuser.Provider value={{ userData, logout }}>
            {children}
        </authuser.Provider>

    )
}

export default AuthuserContext