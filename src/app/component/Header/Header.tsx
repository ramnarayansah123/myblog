import { AppWindowMac } from "lucide-react";
import LoginButtton from "./LoginButton";
import AuthContextProvider from "../../../../lib/contexts/AuthContext";
import Link from "next/link";
export default function Header(){
    return (
    <>
    <nav className="flex justify-between px-7 py-3 border-b">
        <Link href="/admin">
        
        <img className="h-10" src={"logo.png"}></img>
        </Link>
        <ul className="flex">
            <li className="flex gap-5">
                <h1 className="flex gap-3"> <AppWindowMac />
                    Home</h1>
                <h1 className="flex gap-3"> <AppWindowMac />
                    Home</h1>
                <h1 className="flex gap-3"> <AppWindowMac />
                    Home</h1>
            </li>
        </ul>
        <AuthContextProvider>

       <LoginButtton/>
        </AuthContextProvider>
    </nav>
    </>
    );
}