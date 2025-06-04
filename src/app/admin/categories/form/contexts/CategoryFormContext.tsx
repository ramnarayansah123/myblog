"use client"
import { createContext, useContext, useState } from "react";
import { createNewCategory } from "../../../../../../lib/firebase/category/write";

interface CategoryFormContextType {
    data: Record<string, any>;
    isLoading: boolean;
    errors: string | null;
    isDone: boolean;
    image: File | null;
    handleData: (key: string, value: any) => void;
    handleCreate: () => Promise<void>;
    setImage: (file: File | null) => void;
}

const CategoryFormContext = createContext<CategoryFormContextType | undefined>(undefined);

export function CategoryFormContextProvider({children}: {children: React.ReactNode}){
    const [data, setData] = useState<Record<string, any>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<string | null>(null);
    const [isDone, setIsDone] = useState(false);
    const [image, setImage] = useState<File | null>(null);

    const handleData = (key: string, value: any) => {
        setData({...data, [key]: value,})
    }

    const handleCreate = async () => {
        setErrors(null);
        setIsLoading(true);
        setIsDone(false);

        try {
           // TODO : Add data to firebase firestore
           // Todo image ko store me bhi
           await createNewCategory({ data: data, image: image});
           setIsDone(true);
        } catch (error: any) {
            setErrors(error?.message || 'An error occurred')
        }
        setIsLoading(false);
    }

    return (
        <CategoryFormContext.Provider value={{
            data,
            isLoading,
            errors,
            isDone,
            image,
            handleData,
            handleCreate,
            setImage,
        }}>
            {children}
        </CategoryFormContext.Provider>
    );
}

export const useCategoryForm = () => {
    const context = useContext(CategoryFormContext);
    if (context === undefined) {
        throw new Error('useCategoryForm must be used within a CategoryFormContextProvider');
    }
    return context;
};