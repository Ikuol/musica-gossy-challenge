import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsShuffle } from 'react-icons/bs';

const Controls = () => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={'white'} className="hidden sm:block cursor-pointer" />
    <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer"/>
    
      <BsFillPauseFill size={45} color="#FFF" className="cursor-pointer" />
    
    <MdSkipNext size={30} color="#FFF" className="cursor-pointer" />
    <BsShuffle size={20} color={'white'}  className="hidden sm:block cursor-pointer" />
  </div>
);

export default Controls;
