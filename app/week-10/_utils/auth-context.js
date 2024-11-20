'use client'
import { GithubAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebase'

const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)

    function gitHubSignIn() {
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const firebaseSignOut = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [user])

    return (
        <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
            {children}
        </AuthContext.Provider>
    )
}

const useUserAuth = () => useContext(AuthContext)

export { AuthContextProvider, useUserAuth }
