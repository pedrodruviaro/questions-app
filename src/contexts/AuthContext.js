import React, { createContext, useEffect, useState } from 'react'
import {firebase, auth} from '../services/firebase'

export const AuthContext = createContext()

export default function AuthContextProvider(props) {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                setIsAuthenticated(true)
                const { displayName, photoURL, uid } = user
    
                if(!displayName || !photoURL){
                    throw new Error ('Missing information from Google account')
                }
    
                setUser({
                    name: displayName,
                    avatar: photoURL,
                    id: uid
                })
            }
        })

        return () => unsubscribe()

    }, [])


    async function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        const results = await auth.signInWithPopup(provider)

        if(results.user){
            setIsAuthenticated(true)
            const { displayName, photoURL, uid } = results.user

            if(!displayName || !photoURL){
                throw new Error ('Missing information from Google account')
            }

            setUser({
                name: displayName,
                avatar: photoURL,
                id: uid
            })
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}
