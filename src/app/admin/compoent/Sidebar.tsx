import { HomeIcon, FileTextIcon, SettingsIcon, UsersIcon } from "lucide-react"
import Link from "next/link"

export default function Sidebar(){
    const links = [
        {
            name: "Dashboard",
            href: "/admin",
            icon: <HomeIcon className="w-5 h-5" />
        },
        {
            name: "Categories",
            href: "/admin/categories",
            icon: <FileTextIcon className="w-5 h-5" />
        },
        {
            name: "Users",
            href: "/admin/users",
            icon: <UsersIcon className="w-5 h-5" />
        },
        {
            name: "Settings",
            href: "/admin/settings",
            icon: <SettingsIcon className="w-5 h-5" />
        }
    ]

    return (
        <aside className="w-64 bg-white border-r border-gray-200 h-screen">
            <div className="p-6">
                <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
            </div>
            <nav className="px-4">
                <ul className="space-y-2">
                    {links.map((item, index) => (
                        <li key={index}>
                            <Link 
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
