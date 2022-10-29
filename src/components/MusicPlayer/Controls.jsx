import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

const Controls = (props) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    {props.onShuffle ? (
      <BsShuffle size={20} color={'white'}  className="hidden sm:block cursor-pointer bg-[#FACD66]" onClick={() => props.Shuffle(false)} />
    ) : (
      <BsShuffle size={20} color={'white'}  className="hidden sm:block cursor-pointer" onClick={() => props.Shuffle()}/>
    )}

    <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={()=> props.prevSong()}/>

    {props.isPlaying ? (
      <BsFillPauseFill size={45} color="#FFF" className="cursor-pointer" onClick={() => props.setIsPlaying(false)}/>
    ) : (
      <BsFillPlayFill size={45} color="#FFF" className="cursor-pointer" onClick={() => props.setIsPlaying(!props.isPlaying)}/>
    )}
    
    <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={()=> props.nextSong()}/>
    {props.repeatSong ? (
      <BsArrowRepeat size={20} color={'white'} className="hidden sm:block cursor-pointer bg-[#FACD66]" onClick={() => props.setRepeat(false)}/>
    ) : (
      <BsArrowRepeat size={20} color={'white'} className="hidden sm:block cursor-pointer" onClick={() => props.setRepeat()}/>
    )}
  </div>
);

export default Controls;
