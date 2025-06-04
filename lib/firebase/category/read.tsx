"use client"

import useSWRSubscription from "swr/subscription"
import { db } from "../../firebase"
import { collection, onSnapshot } from "firebase/firestore"


export function useCategories(){

    const {data,error} = useSWRSubscription(['categories'], ([path],{next})=>{
        const ref = collection(db,path);

        const unsub = onSnapshot(ref,(snaps)=>{
            next(null,snaps.docs.map((v)=> v.data()))
        
        }, (error)=> {
            next(error?.message)

        })

        return()=> unsub();
    })
    return {
        data,
        error,
        isLoding: data === undefined ? true : false,
    }

}

            
        

       
