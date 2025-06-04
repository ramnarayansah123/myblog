import { CategoryFormContextProvider } from "./contexts/CategoryFormContext";

export default function Layout({children}: {children: React.ReactNode}){
    return <CategoryFormContextProvider>{children}</CategoryFormContextProvider>
}
