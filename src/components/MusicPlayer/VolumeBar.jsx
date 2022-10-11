import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = () => (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    <BsFillVolumeUpFill size={25} color="#FFF" />
    <BsVolumeDownFill size={25} color="#FFF" />
    <BsFillVolumeMuteFill size={25} color="#FFF" />
    <input
      type="range"
      step="any"
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      id="bar"
    />
  </div>
);

export default VolumeBar;
