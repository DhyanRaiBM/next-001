"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

type Props = {}
const SearchBar = (props: Props) => {
    const [search, setSearch] = useState('');
    const router =useRouter()
    console.log(search);
    
    const handleSubmit =async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(search){
            router.push(`/${search}`)   
        }

    }
  return (
    <div className="relative">
        <form onSubmit={handleSubmit} >
        <input
            type="text"
            className="bg-gray-700 text-white px-3 py-1 rounded-md focus:outline-none"
            placeholder="Search..."
            onChange={(e)=>setSearch(e.target.value)}
        />
        <button className="absolute right-0 top-0 mt-1 mr-2">
            {/* You can use a search icon or an SVG for the button */}
            🔍
        </button>
        </form>
    </div>
  )
}
export default SearchBar