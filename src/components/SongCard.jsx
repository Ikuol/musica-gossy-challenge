import React from 'react';
import { SongC } from '../containers';
import { song1, song2, song3, song4, song5} from './imports';


import 'swiper/css';

const SongCard = () => {
  return (  
    <div className='flex flex-col mt-10 gap-[20px] ml-[20px]'>
      <div>
            <h1 className='text-white text-[20px] font-bold'>New Releases</h1>
      </div>
      <div className='flex flex-row gap-[20px]'>
            <SongC imgUrl={ song1 } text='Life in a bubble'/> 
            <SongC imgUrl={ song2 } text='Mountains'/> 
            <SongC imgUrl={ song3 } text='Limits'/> 
            <SongC imgUrl={ song4 } text='Everythings black'/> 
            <SongC imgUrl={ song5 } text='Life in a bubble'/>
            <SongC imgUrl={ song1 } text='Nomad'/> 
            <SongC imgUrl={ song2 } text='Mountains'/> 
            <SongC imgUrl={ song3 } text='Limits'/> 
            <SongC imgUrl={ song4 } text='Everythings black'/> 
            <SongC imgUrl={ song5 } text='Nomad'/> 
      </div>
    </div>
  )
}

export default SongCard