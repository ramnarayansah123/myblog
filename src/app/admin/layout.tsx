import { ReactNode } from 'react'
import AuthContextProvider from '../../../lib/contexts/AuthContext'
import Sidebar from './compoent/Sidebar'

export default function Layout({ children }: { children: ReactNode }){
    return (
        <AuthContextProvider>
            <div className="min-h-screen bg-gray-50">
                <div className="flex h-screen">
                    <Sidebar />
                    <div className="flex-1 flex flex-col">
                        {children}
                    </div>
                </div>
            </div>
        </AuthContextProvider>
    )
}
