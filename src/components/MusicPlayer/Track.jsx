import React from 'react';

const Track = ({ imgUrl, title, artist }) => (
  <div className="flex-1 flex items-center justify-start">
    <div className=' hidden sm:block h-16 w-16 mr-4'>
      <img src={ imgUrl } alt="cover art" className="rounded-[15px]" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">{ title }</p>
      <p className="truncate text-gray-300">{ artist }</p>
    </div>
  </div>
);

export default Track;
