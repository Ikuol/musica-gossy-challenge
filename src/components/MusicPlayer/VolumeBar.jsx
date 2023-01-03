import React from "react";
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { useNavigate, useLocation } from "react-router-dom";

const VolumeBar = props => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    navigate(`/Lyrics/${props.currentSong.id}`);
  };

  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
      <TbMicrophone2
        size={17}
        className={`cursor-pointer ${
          pathname === `/Lyrics/${props.currentSong.id}` ? "text-[#000]" : ""
        }`}
        onClick={() => handleClick()}
      />
      {props.value === 1 && <BsFillVolumeUpFill size={25} color="#FFF" />}
      {props.value === 0.5 && <BsVolumeDownFill size={25} color="#FFF" />}
      {props.value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" />}

      <input
        ref={props.volumeRef}
        type="range"
        step="any"
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
        onChange={e => props.handleVolume(e)}
        id="bar"
      />
    </div>
  );
};

export default VolumeBar;
