import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

const VolumeBar = (props) => (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    
    {props.value === 1 && <BsFillVolumeUpFill size={25} color="#FFF" />}
    {props.value === 0.5 && <BsVolumeDownFill size={25} color="#FFF" />}
    {props.value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" />}
    
    <input
      ref={props.volumeRef}
      type="range"
      step="any"
      className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      onChange={(e)=> props.handleVolume(e)}
      id="bar"
    />
  </div>
);

export default VolumeBar;
