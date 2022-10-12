import React from 'react';
import { SearchBar, SideBar, Collection, Button } from '../components';
import Index from '../components/MusicPlayer';
import {song1, song2, song3, song4} from '../components/imports';

const Library = () => {
  return (
    <div className='relative flex'>
    <SideBar />
    <div className='flex-1 flex flex-col mt-[-10px]'>
        <SearchBar />
        <div className='flex flex-row mt-[40px] ml-[50px] gap-[25px]'>
          <Button bgColor={'#FACD66'} Width={'200px'} Border={'none'} Color={'#1D2123'} text={'My collection'} />
          <Button bgColor={'#1D2123'} Width={'80px'} Border={'1px solid gray'} Color={'gray'} text={'Links'} />
        </div>
        <div className='flex flex-row gap-[30px]'>
            <Collection imgUrl={ song1 } title={'Limits'} artist={'J cole'} />
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



