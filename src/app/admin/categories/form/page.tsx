"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useCategoryForm } from "./contexts/CategoryFormContext"
import { error } from "console"
import { useSearchParams } from "next/navigation"

export default function Form(){
    const searchParams = useSearchParams();
    const updateCategoryId = searchParams.get('id')

    const {data, isLoading, errors, isDone, handleData, handleCreate, image, setImage, } = useCategoryForm();

    return(
        <div className="p-6">
            <div className="mb-6">
                <Link href="/admin/categories" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Categories</span>
                </Link>
            </div>

            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Create New Category</h1>
                
                <form className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Category Name * {updateCategoryId}
                        </label>
                        <input 
                            type="text" 
                            id="name"
                            onChange={(e) => handleData("name", e.target.value)}
                            value={data?.name ?? ""}
                            required 
                            placeholder="Enter category name" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
                            Category Slug *
                        </label>
                        <input 
                            type="text" 
                            id="slug"
                            onChange={(e) => handleData("slug", e.target.value)}
                            value={data?.slug ?? ""}
                            required 
                            placeholder="Enter category slug" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>



                    {image && <div className="w-full h-48 bg-gray-100 rounded-md relative">
                        <Image 
                            src={URL.createObjectURL(image)} 
                            alt="Category Image"
                            fill
                            className="object-contain"
                        />
                    </div>}
                    <div className="space-y-2">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Category Image *
                        </label>
                        <input 
                            type="file" 
                            id="image"
                            name="image"
                            onChange={(e) => {
                                e.preventDefault();
                                setImage(e.target.files?.[0] || null);
                            }
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    

                    <div className="flex justify-end gap-4">
                        <Link 
                            href="/admin/categories"
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        >
                            Cancel
                        </Link>
                        
                        
                        <button 
                        
                        onClick={(e) => {
                            e.preventDefault();
                            handleCreate();
                            console.log("save")
                        }}
                            type="submit"

                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                           {isLoading ? "Loding..." : "Create"}
                        </button>
  
                        {isDone && <h3 className="text-green-500">Sucessfully Create !</h3>}
                    </div>
                </form>
            </div>
        </div>
    )
}