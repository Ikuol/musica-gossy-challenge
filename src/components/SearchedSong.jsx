import React, {useContext} from "react";
import { songsContext } from "../context/context";

const SearchedSong = ({ song }) => {
  const { getSongToPlay, setSearchedSong, searchInputRef } = useContext(songsContext);

  const handleClick = () => {
    getSongToPlay(song.id);
    setSearchedSong([]);
    searchInputRef.current.value = "";
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center border-b-[2px] border-gray-500 w-[500px] mt-[10px] pb-[4px] cursor-pointer"
    >
      <img className="w-[40px] h-[40px] mr-[10px]" src={song.cover} alt={"asae"} />
      <h1>
        <span className="font-bold">{song.artist}</span> -{" "}
        <span>{song.title}</span>
      </h1>
    </div>
  );
};

export default SearchedSong;