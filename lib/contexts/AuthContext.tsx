"use client"

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth } from "../firebase"

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    handleSignInWithGoogle: () => Promise<void>;
    handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
    children: ReactNode;
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true)
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setIsLoading(false)
        });
        return () => unsub();
    }, [])

    const handleSignInWithGoogle = async () => {
        setIsLoading(true)
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error: any) {
            setError(error?.message || 'An error occurred during sign in')
        }
        setIsLoading(false)
    }

    const handleLogout = async () => {
        setIsLoading(true)
        try {
            await signOut(auth);
        } catch (error: any) {
            setError(error?.message || 'An error occurred during logout')
        }
        setIsLoading(false)
    }

    return <AuthContext.Provider
        value={{
            user,
            isLoading,
            error,
            handleSignInWithGoogle,
            handleLogout,
        }}
    >
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);