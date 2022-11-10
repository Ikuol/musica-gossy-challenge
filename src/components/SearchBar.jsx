import React, {useContext} from 'react';
import { songsContext } from '../context/context';
import SearchedSong from './SearchedSong';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {

  const {
    searchInputRef,
    searchedSong,
    getSearchedSong
  } = useContext(songsContext);
  

  return (
    
        <form autoComplete='off' className='p-2 text-gray-400 focus-within:text-gray-600 mt-[15px] w-[32.2%] rounded-[50px]'>
            <div className='flex flex-row justify-start items-center ml-[50px]'>
                    < FiSearch className='w-5 h-5 ml-4' />
                    <input 
                      onChange={() => getSearchedSong(searchInputRef.current.value)}
                      ref={searchInputRef}
                      type="search" 
                      placeholder='Search artists' 
                      className='flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4 hidden lg:block'
                    />
            </div>

            <div className="text-white absolute top-[75px] left-[175px] max-h-[300px] overflow-hidden bg-[gray]/30 backdrop-blur-sm">
              {searchedSong &&
                searchedSong.map((song, index) => (
                  <SearchedSong song={song} key={index} />
                ))}
            </div>
        </form>
  )
}

export default SearchBar