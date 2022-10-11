import React from 'react';
import { SearchBar, SideBar, Collection } from '../components';
import Index from '../components/MusicPlayer';
import {song1, song2, song3, song4} from '../components/imports';

const Library = () => {
  return (
    <div className='relative flex'>
    <SideBar />
    <div className='flex-1 flex flex-col mt-[-10px]'>
        <SearchBar />
        <div className='flex flex-row mt-[40px] ml-[50px] gap-[25px]'>
          <button className='bg-[#FACD66] w-[200px] h-[57px] rounded-[27px] p-[10px]'>My collection</button>
          <button className='w-[80px] h-[57px] rounded-[27px] p-[10px] btn'>Links</button>
        </div>
        <div className='flex flex-row gap-[30px]'>
            <Collection imgUrl={ song1 } />
            <Collection imgUrl={ song2 } />
            <Collection imgUrl={ song3 } />
            <Collection imgUrl={ song4 } />
        </div>
    </div>
    <Index />
  </div>
  )
}

export default Library


// height: 37px;
// width: 120px;
// left: 96px;
// top: 96px;
// border-radius: 27px;
// padding: 10px;



