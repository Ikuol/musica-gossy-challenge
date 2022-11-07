import React, { useState, createContext, useRef } from "react";
import { getLyrics } from 'genius-lyrics-api';

export const songsContext = createContext();

const OurProvider = ({ children }) => {
  //states
  const audioRef = useRef();
  const searchInputRef = useRef(); //The state of the input of the search bar
  const [openMenu, setOpenMenu] = useState(false); //To close and open menu

  const [isPlaying, setIsPlaying] = useState(false); //to know if a song is playing or not
  const [repeatSong, setRepeatSong] = useState(false); //to know if to repeat a song if it has finished
  const [isOnShuffle, setIsOnShuffle] = useState(false); //to know if shuffle is on
  const [searchedSong, setSearchedSong] = useState([]); //the result of the songs of a searched artist
  const [charts, setCharts] = useState(null); //the charts(playlist)
  const [chartToBeViewed, setChartToBeViewed] = useState(null); //the chart we are going to view in the viewchart page
  const [Lyrics, setLyrics] = useState('');
  // const [reset, setReset] = useState(false);
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
    // setReset(true);
    await setSongs(songsClone);
    await setIsPlaying(false);
    await setCurrentSong(songs.find((song) => song.id === id));
    // setReset(false);
    setIsPlaying(true);
  };

  //play next song this runs when a song finishes or we click the next button
  const getNextSong = (id) => {
    if (isOnShuffle) {
      shufflesong();
    } else {
      const songIndex = songs.findIndex((song) => song.id === id);
      const nextSongIndex = songIndex + 1;
      if (repeatSong) {
        setCurrentSong(songs[songIndex]);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        if (nextSongIndex > songs.length - 1) {
          setCurrentSong(songs[0]);
        } else {
          setCurrentSong(songs[nextSongIndex]);
        }
      }
    }
  };

  //to play previous song
  const getPreviousSong = (id) => {
    const songIndex = songs.findIndex((song) => song.id === id);
    const prevSongIndex = songIndex - 1;
    if (repeatSong) {
      setCurrentSong(songs[songIndex]);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      if (prevSongIndex < 0) {
        setCurrentSong(songs[songs.length - 1]);
      } else {
        setCurrentSong(songs[prevSongIndex]);
      }
    }
  };

  //when the shuffle is on, we can get random songs with this function
  const shufflesong = () => {
    const randomSongIndex = Math.round(Math.random() * songs.length);
    setCurrentSong(songs[randomSongIndex]);
  };

  //to get the lyrics
  const getTheLyrics = async(artist, song) => {

    const options = {
      apiKey: 'InM3ub279Ei0ft-u4Yyskns2-ZwFABGYQwuXciCvvYpz2Iov9eZYPmH0rR1bxPfP',
      title: `${song}`,
      artist: `${artist}`,
      optimizeQuery: true,
    };

    await getLyrics(options).then((lyrics) => setLyrics(lyrics));
  }

  //to get songs for an artist w search in the searchbar
  const getSearchedSong = (artist) => {
    if (artist === "") {
      setSearchedSong([]);
    } else {
      const returnedSongs = songs.filter((song) =>
        song.artist.toLowerCase().includes(artist.toLowerCase())
      );
      setSearchedSong(returnedSongs);
    }
  };

  //This function returns the chart we are going to view in the viewchart
  const getChartToBeViewed = (id) => {
    setChartToBeViewed(charts.find((chart) => chart.id === id));
  };

  return (
    <songsContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        addSongsToList,
        songs,
        setSongs,
        currentSong,
        setCurrentSong,
        getSongToPlay,
        isPlaying,
        setIsPlaying,
        getNextSong,
        getPreviousSong,
        repeatSong,
        setRepeatSong,
        audioRef,
        shufflesong,
        isOnShuffle,
        setIsOnShuffle,
        searchInputRef,
        searchedSong,
        setSearchedSong,
        getSearchedSong,
        getTheLyrics,
        charts,
        setCharts,
        Lyrics,
        setLyrics,
        chartToBeViewed,
        getChartToBeViewed,
        addChartsToSongs,
      }}
    >
      {children}
    </songsContext.Provider>
  );
};

export default OurProvider;