import React from 'react';

const Track = (props) => (
  <div className="flex-1 flex items-center justify-start">
    <div className=' hidden sm:block h-16 w-16 mr-4'>
      <img src={ props.song.img_src } alt="cover art" className="rounded-[15px]" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">{ props.song.title }</p>
      <p className="truncate text-gray-300">{ props.song.artist }</p>
    </div>
  </div>
);

export default Track;
