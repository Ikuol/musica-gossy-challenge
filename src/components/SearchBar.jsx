import React from 'react';
import { FiSearch } from 'react-icons/fi';
const SearchBar = () => {
  return (
        <form autoComplete='off' className='p-2 text-gray-400 focus-within:text-gray-600'>
            <div className='flex flex-row justify-start items-center mt-[18px] ml-[50px]'>
                    < FiSearch className='w-5 h-5 ml-4' />
                    <input type="search" placeholder='Search artists' className='flex-1 bg-transparent 
                    border-none outline-none placeholder-gray-500 text-base text-white p-4'/>
            </div>
        </form>
  )
}

export default SearchBar