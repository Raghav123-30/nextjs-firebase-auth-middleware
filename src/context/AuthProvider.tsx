"use client"
import {auth} from "@/firebase";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut} from "firebase/auth";
import React, {createContext, useContext, useState} from "react";
import axios from "axios";
import {useRouter} from "next/navigation";

type AuthContextType = {
    email: string,
    setEmail: (prev: string) => void,
    password: string,
    setPassword: (prev: string) => void,
    errorMessage: string,
    setErrorMessage: (prev: string) => void,
    logIn: () => void,
    register:()=>void,
    logOut: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export default function AuthProvider({children}: { children: React.ReactNode }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const router = useRouter()
    const logIn = async () => {
        setErrorMessage("")

       await signInWithEmailAndPassword(auth, email, password).then(async (result) => {
            if (result.user) {
                const response = await axios.post("/api/user", {type: "login"})
                router.push("/")
            }
        }).catch((error) => {
            console.log(error);
            setErrorMessage(error.message)
        })
    }
    const logOut = async () => {
        setEmail("")
        setPassword("")
        await signOut(auth)
        const response = await axios.post("/api/user", {type: "logout"})
        if (response.status === 200) {
            router.push("/login")
        }
    }
    const register = async () => {
        await createUserWithEmailAndPassword(auth, email, password).then(async (result) => {
            if (result.user) {

                router.push("/login")
            }
        }).catch((error) => {
            console.log(error);
            setErrorMessage(error.message)
        })
    }
    return (
        <AuthContext.Provider
            value={{logIn, logOut, email, setEmail, password, setPassword,register, errorMessage, setErrorMessage}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}