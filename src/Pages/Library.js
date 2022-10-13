import React from 'react';
import { SearchBar, SideBar, Collection, Button, Index } from '../components';
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
        <div className='flex flex-row gap-[20px]'>
            <Collection imgUrl={ song1 } title={'Limits'} artist={'J cole'} like={'2,3k likes'}/>
            <Collection imgUrl={ song2 } title={'Limits'} artist={'J cole'} like={'2,3k likes'}/>
            <Collection imgUrl={ song3 } title={'Limits'} artist={'J cole'} like={'2,3k likes'}/>
            <Collection imgUrl={ song4 } title={'Limits'} artist={'J cole'} like={'2,3k likes'}/>
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



