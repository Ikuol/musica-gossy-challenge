/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef, useContext } from "react";
import { Track, Controls, VolumeBar } from "../index";
import { songsContext } from "../../context/context";

const Player = props => {
  const {
    currentSong,
    isPlaying,
    setIsPlaying,
    getNextSong,
    getPreviousSong,
    repeatSong,
    setRepeatSong,
    audioRef,
    isOnShuffle,
    setIsOnShuffle,
    getTheLyrics
  } = useContext(songsContext);

  const [value, setValue] = useState(1 / 2);

  // En gros, useRef est comme une « boîte »
  // qui pourrait contenir une valeur modifiable
  // dans sa propriété .current.
  //Donc avec l'attribut current créé, je peux
  //l'utiliser pour effectuer des opérations
  //(current) => la valeur de l'élément à l'instant
  // même

  const seekRef = useRef();
  const volumeRef = useRef();
  const seekTrackRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef, currentSong]);

  const setSeek = () => {
    seekRef.current.style.width =
      (audioRef.current.currentTime / audioRef.current.duration) * 100 + "%";

    if (audioRef.current.currentTime === audioRef.current.duration) {
      setNextSong();
    }
  };

  const setNextSong = () => {
    getNextSong(currentSong.id);
  };

  const setPrevSong = () => {
    getPreviousSong(currentSong.id);
  };

  const handleShuffle = () => {
    setIsOnShuffle(!isOnShuffle);
  };

  const setProgress = e => {
    const width = seekTrackRef.current.clientWidth;
    const clickedPoint = e.nativeEvent.offsetX;
    const duration = audioRef.current.duration;

    audioRef.current.currentTime = (clickedPoint / width) * duration;
  };

  const handleVolume = e => {
    const max = 100;
    const clickedPoint = e.target.valueAsNumber;

    audioRef.current.volume = clickedPoint / max;

    if (audioRef.current.volume === 0) {
      setValue(0);
    }

    if (audioRef.current.volume <= 0.5 && audioRef.current.volume > 0) {
      setValue(1 / 2);
    }

    if (audioRef.current.volume === 1) {
      setValue(1);
    }
  };

  return (
    <div className="sm:px-12 px-8 w-full flex items-center justify-between">
      <audio ref={audioRef} src={currentSong?.audio} onTimeUpdate={setSeek} />
      <Track song={props.currentSong} />
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
            onClick={e => setProgress(e)}
            className="absolute left-0 w-full h-[4px] bg-white/40"
          ></div>
          <div
            ref={seekRef}
            className="absolute left-0 w-[0%] duration-100 h-[4px] flex items-center"
          >
            <div className="relative h-full w-full">
              <div onClick={e => setProgress(e)} className="h-[4px] w-full bg-[#FACD66]"></div>
              <div className="absolute right-[-4px] top-[50%] -translate-y-1/2 w-[13px] h-[13px] bg-[#FACD66] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <VolumeBar
        volumeRef={volumeRef}
        handleVolume={handleVolume}
        value={value}
        getLyrics={getTheLyrics}
        currentSong={currentSong}
      />
    </div>
  );
};

export default Player;
