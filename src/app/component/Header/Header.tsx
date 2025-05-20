import { AppWindowMac } from "lucide-react";

export default function Header(){
    return (
    <>
    <nav className="flex justify-between px-7 py-3 border-b">
        <img className="h-10" src={"logo.png"}></img>
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
        <button className="bg-black rounded-2xl w-40 text-white flex items-center gap-1 ">
            <img className="w-7  " src={"/google.png"}></img>
            Login with google</button>
    </nav>
    </>
    );
}