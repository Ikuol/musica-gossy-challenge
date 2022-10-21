/* eslint-disable jsx-a11y/media-has-caption */
import React, {useState, useEffect, useRef} from "react";
import Track from "./Track";
import Controls from './Controls';
import Seekbar from './Seekbar';



const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() =>{
    if(isPlaying){
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (fowards=true) => {
      if (fowards) {
        props.setCurrentSongIndex(()=>{
          let temp = props.currentSongIndex;
          temp++;

          if(temp >props.songs.length - 1){
            temp = 0;
          }
          return temp;
        });
      } else {
        props.setCurrentSongIndex(()=>{
          let temp = props.currentSongIndex;
          temp--;

          if(temp < 0){
            temp = props.songs.length - 1;
          }
          return temp;
        });
      }
  }

  return (
    <div className="sm:px-12 px-8 w-full flex items-center justify-between">
      <audio 
        src={props.songs[props.currentSongIndex].src} 
        ref={audioEl} 
      />
      <Track 
        song={props.songs[props.currentSongIndex]}
       />
      <div className="flex-1 flex flex-col items-center justify-center ml-[430px]">
        <Controls 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          skipSong={skipSong} 
        />
        <Seekbar />
      </div>
    </div>
  );
};

export default Player;

