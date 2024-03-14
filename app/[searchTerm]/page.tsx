"use client"

import getData from "@/lib/getData"
import { Suspense, useEffect, useState } from "react"
import Card from "./components/Card"
import LoadingSkeleton from "./components/LoadingSkeleton"

type Props = {
    params:{
        searchTerm:string
    }
}

export const revalidate = 20


const Page = ({ params:{ searchTerm }}: Props) => {
    const [result, setResult] = useState<ResultObjectType[]| null>([])
    const [isLoading, setIsLoading] = useState(false)
    // const result:SearchResult=await getData(searchTerm);
    console.log(result);
  
    // console.log(searchTerm);
    
    useEffect(()=>{
       async function fetchResult(){
            setIsLoading(true);
            const result:SearchResult=await getData(searchTerm);
            if(result){
                setResult(result);
            }
            setIsLoading(false);
       }
       fetchResult();
    },[searchTerm]);

    // throw new Error("What a Lame Error !!!")

    
  return (
    <div>
        <h1>Hellllllllllllllllllllllllllllllllllllllllooooooooooooooo</h1>
        {
            isLoading ?(
                <LoadingSkeleton />
            ):
            (
                <div>
                    {
                        result && result.length >0?
                            (
                                result.map((res,index)=>(
                                    <Card key={index} res={res} />
                                ))
                            ):
                            (
                                <h2>{`No Results Found for ${searchTerm.replaceAll('%20',' ')}`}</h2>
                            )
                    }
                </div>
              )
        }  
        
    </div>
  )
}
export default Page