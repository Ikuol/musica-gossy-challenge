import React, { useState, createContext, useContext } from "react";

const songsContext = createContext();

const OurProvider = ({ children }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  //songs is where the songs are stored
  const [songs, setSongs] = useState([
    {
      id: "popular-3",
      artist: "Burna Boy",
      title: "Last Last",
      cover: "https://musica-api.up.railway.app/cover/cover_13.jpg",
      audio: "https://musica-api.up.railway.app/audio/audio_13.mp3",
    },
  ]);

  //This is a clone of the songs state because the songs are edited when we want to play a playlist
  //So when we want to play a song not in playlist, we can just copy the initial songs from this state
  const [songsClone, setSongsClone] = useState([
    {
      id: "popular-3",
      artist: "Burna Boy",
      title: "Last Last",
      cover: "https://musica-api.up.railway.app/cover/cover_13.jpg",
      audio: "https://musica-api.up.railway.app/audio/audio_13.mp3",
    },
  ]);

  const [currentSong, setCurrentSong] = useState(songs[0]); //the current song we are going to play

  //Actions
  //--------
  //this is a function to add fetched songs to a the songs state and also the songsclone
  const addSongsToList = (newsong) => {
    if (
      songs.filter((song) => song?.id === newsong[newsong.length - 1]?.id)
        .length > 0
    ) {
      return;
    } else {
      setSongs([...songs, ...newsong]);
      setSongsClone([...songs, ...newsong]);
    }
  };

  const addChartsToSongs = (newcharts) => {};

  //This action run when we click a song
  const getSongToPlay = async (id) => {
    await setSongs(songsClone);
    await setIsPlaying(false);
    await setCurrentSong(songs.find((song) => song.id === id));
    setIsPlaying(true);
  };

  //play next song this runs when a song finishes or we click the next button
  

  return (
    <songsContext.Provider
      value={{
        addSongsToList,
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        getSongToPlay,
        isPlaying,
        setIsPlaying,
        addChartsToSongs,
      }}
    >
      {children}
    </songsContext.Provider>
  );
};

export default OurProvider;

export const useSongsContext = () => {
  return useContext(songsContext);
};