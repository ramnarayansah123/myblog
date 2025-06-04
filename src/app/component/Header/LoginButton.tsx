"use client"
import Link from "next/link";
import { useAuth } from "../../../../lib/contexts/AuthContext"

export default function LoginButton() {
    const auth = useAuth();
    
    if (!auth) {
        return null; // or some loading/error state
    }

    const { user, isLoading, error, handleSignInWithGoogle, handleLogout } = auth;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (user) {
        return <div className="flex items-center gap-2"> 
            <button 
                onClick={() => {
                    handleLogout();
        }} 
        className="bg-black rounded-2xl px-4 py-2 text-white flex items-center gap-1">
       
        Logout
    </button>
    <Link href="/admin">

    <div className="bg-red-300 rounded-2xl px-4 py-2 ">
        <div className="flex items-center gap-2">

            <img className="w-7 rounded-full" src={user?.photoURL || ''} alt="User avatar" />
            <p>{user?.displayName}</p>
        </div>

            <p>{user?.email}</p>
    </div>
    </Link>
    </div>
    }

    return (
        <>
            <section>
                <button 
                    onClick={() => {
                        handleSignInWithGoogle();
                    }} 
                    className="bg-black rounded-2xl w-40 text-white flex items-center gap-1"
                >
                    <img className="w-7" src="/google.png" alt="Google logo" />
                    Login with google
                </button>
            </section>
        </>
    )
}