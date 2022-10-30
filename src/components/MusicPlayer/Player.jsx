/* eslint-disable jsx-a11y/media-has-caption */
import React, {useState, useEffect, useRef} from "react";
import Track from "./Track";
import Controls from './Controls';
import VolumeBar from './VolumeBar';



const Player = (props) => {
  
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); //to know if a song is playing or not
  const [repeatSong, setRepeatSong] = useState(false); //to know if to repeat a song if it has finished
  const [isOnShuffle, setIsOnShuffle] = useState(false); //to know if shuffle is on
  const [value, setValue] = useState(1/2); 

  const seekRef = useRef();
  const volumeRef = useRef();
  const seekTrackRef = useRef();


  useEffect(() =>{
    if(isPlaying){
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  },[isPlaying, audioRef, props.currentSong]);

  //play next song this runs when a song finishes or we click the next button
  const getNextSong = (id) => {
    if (isOnShuffle) {
      shufflesong();
    } else {
      const songIndex = props.songs.findIndex((song) => song.id === id);
      const nextSongIndex = songIndex + 1;
      if (repeatSong) {
        props.setCurrentSong(props.songs[songIndex]);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        if (nextSongIndex > props.songs.length - 1) {
          props.setCurrentSong(props.songs[0]);
        } else {
          props.setCurrentSong(props.songs[nextSongIndex]);
        }
      }
    }
  };

  //to play previous song
  const getPreviousSong = (id) => {
    const songIndex = props.songs.findIndex((song) => song.id === id);
    const prevSongIndex = songIndex - 1;
    if (repeatSong) {
      props.setCurrentSong(props.songs[songIndex]);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      if (prevSongIndex < 0) {
        props.setCurrentSong(props.songs[props.songs.length - 1]);
      } else {
        props.setCurrentSong(props.songs[prevSongIndex]);
      }
    }
  };

  //when the shuffle is on, we can get random songs with this function
  const shufflesong = () => {
    const randomSongIndex = Math.round(Math.random() * props.songs.length);
    props.setCurrentSong(props.songs[randomSongIndex]);
  };

  const setSeek = () => {
    seekRef.current.style.width =
      (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";

    if (audioRef.current.currentTime === audioRef.current.duration) {
      setNextSong();
    }
  };

  const setNextSong = () => {
    getNextSong(props.currentSong.id);
  };

  const setPrevSong = () => {
    getPreviousSong(props.currentSong.id);
  };

  const handleShuffle = () => {
    setIsOnShuffle(!isOnShuffle);
  };

  const setProgress = (e) => {
    const width = seekTrackRef.current.clientWidth;
    const clickedPoint = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickedPoint / width) * duration;
  };

  const handleVolume = (e) => {
    const max = 100;
    const clickedPoint = e.target.valueAsNumber;
    
    audioRef.current.volume = clickedPoint / max;

    if(audioRef.current.volume === 0){
      setValue (0);
    }

    if(audioRef.current.volume <= 0.5 && audioRef.current.volume > 0){
      setValue(1/2);
    }

    if(audioRef.current.volume === 1){
      setValue (1);
    }
    
  };
  

  return (
    <div className="sm:px-12 px-8 w-full flex items-center justify-between">
      <audio 
          ref={audioRef}
          src={props.currentSong?.audio}
          onTimeUpdate={setSeek} 
      />
      <Track 
        song={props.currentSong}
      />
      <div className="flex flex-col items-center justify-center">
        <Controls 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          prevSong={setPrevSong}
          nextSong={setNextSong}
          onShuffle={isOnShuffle}
          Shuffle={handleShuffle}
          repeatSong={repeatSong}
          setRepeat={setRepeatSong}
        />

        {/* seekBar */}
        <div className="hidden md:block relative mt-[31px] w-full h-fit cursor-pointer">
          <div
            ref={seekTrackRef}
            onClick={(e) => setProgress(e)}
            className="absolute left-0 w-full h-[4px] bg-white/40"
          ></div>
          <div
            ref={seekRef}
            className="absolute left-0 w-[0%] duration-100 h-[4px] flex items-center"
          >
            <div className="relative h-full w-full">
              <div
                onClick={(e) => setProgress(e)}
                className="h-[4px] w-full bg-[#FACD66]"
              ></div>
              <div className="absolute right-[-4px] top-[50%] -translate-y-1/2 w-[13px] h-[13px] bg-[#FACD66] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <VolumeBar 
          volumeRef={volumeRef}
          handleVolume={handleVolume}
          value = {value}
      />
    </div>
  );
};

export default Player;

