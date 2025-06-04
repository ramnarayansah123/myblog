"use client"
import { createContext, useContext, useState } from "react";
import { createNewCategory } from "../../../../../../lib/firebase/category/write";
import { useSearchParams } from "next/navigation";

interface FormErrors {
    name?: string;
    slug?: string;
    image?: string;
}

interface CategoryFormContextType {
    data: Record<string, any>;
    isLoading: boolean;
    errors: FormErrors | null;
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
    const [errors, setErrors] = useState<FormErrors | null>(null);
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
            // Validate form data
            const newErrors: FormErrors = {};
            
            if (!data.name?.trim()) {
                newErrors.name = 'Category name is required';
            }
            
            if (!data.slug?.trim()) {
                newErrors.slug = 'Category slug is required';
            }
            
            if (!image && !data.id) {
                newErrors.image = 'Category image is required';
            }

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                setIsLoading(false);
                return;
            }

            await createNewCategory({ data: data, image: image});
            setIsDone(true);
        } catch (error: any) {
            setErrors({ 
                name: error?.message || 'An error occurred'
            });
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