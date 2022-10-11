import React from 'react';
import song4 from '../../assets/song4.png';

const Track = () => (
  <div className="flex-1 flex items-center justify-start">
    <div className=' hidden sm:block h-16 w-16 mr-4'>
      <img src={ song4 } alt="cover art" className="rounded-[15px]" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
      </p>
      <p className="truncate text-gray-300">
      </p>
    </div>
  </div>
);

export default Track;
