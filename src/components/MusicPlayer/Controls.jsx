import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = (props) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsShuffle size={20} color={'white'}  className="hidden sm:block cursor-pointer" />
    <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={()=> props.skipSong(false)}/>

    {props.isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" className="cursor-pointer" onClick={() => props.setIsPlaying(false)}/>
    ) : (
      <BsFillPlayFill size={45} color="#FFF" className="cursor-pointer" onClick={() => props.setIsPlaying(!props.isPlaying)}/>
    )}
    
    <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={()=> props.skipSong()}/>
    <BsArrowRepeat size={20} color={'white'} className="hidden sm:block cursor-pointer" onClick={() => props.setRepeat()}/>
  </div>
);

export default Controls;
