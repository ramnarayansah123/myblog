import { CircleFadingPlus, } from "lucide-react";
import Link from "next/link";
import CategoriesListwView from "./components/CategoriesListView";

export default function Categories(){
    return (
        <section>
            
            <div className="flex justify-between items-center px-2 py-3 border-b border-gray-200">
                <h1>Categories</h1>

                <Link href="/admin/categories/form">
                <CircleFadingPlus />
                <h1>New</h1>
                </Link>
            </div>
            <CategoriesListwView/>
        </section>
    )
}