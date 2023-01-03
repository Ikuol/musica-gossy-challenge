import React, { useContext, useEffect } from "react";
import { songsContext } from "../context/context";

const Lyrics = () => {
  const { currentSong, getTheLyrics, Lyrics } = useContext(songsContext);

  useEffect(() => {
    try {
      getTheLyrics(currentSong.artist, currentSong.title);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <div className="flex-1 flex flex-col mt-[-10px]">
        <div className="flex flex-col">
          <div className="mb-10 ml-[4%] w-[50%] p-[15px]">
            <h2 className="text-[#ad862a] text-3xl font-bold">Lyrics:</h2>
          </div>
          <div className="mt-5 w-[20%] h-[400px] overflow-scroll m-auto">
            {Lyrics ? (
              <p className="text-[gray]">{Lyrics}</p>
            ) : (
              <p className="text-[gray]">Sorry, no lyrics found!</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lyrics;
