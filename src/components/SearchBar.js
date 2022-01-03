import React from 'react'

export default function SearchBar({placeholder,onChange}) {
    return (
        <div class="container flex justify-center items-center ">
            
            <div class="relative">
                <div class="absolute top-4 left-3"> 
                <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                </div> 
                <input type="text" class="h-14 w-96 pl-10 pr-20 rounded-lg z-0 bg-primary-content shadow focus:outline-none" 
                placeholder={placeholder}
                onChange={onChange}/>
                <div class="absolute top-2 right-2"> 
                <button class="h-10 w-20 text-white rounded-lg btn-primary ">Search</button>
                 </div>
            </div>
        </div>
    )
}