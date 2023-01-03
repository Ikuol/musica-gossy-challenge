import { useContext } from "react";
import Player from "./Player";
import { songsContext } from "../../context/context";

const MusicPlayer = () => {
  const { currentSong, songs, setSongs, songsClone, setSongsClone, setCurrentSong } =
    useContext(songsContext);

  return (
    <div className="sm:px-12 px-8 w-full h-[140px] flex bg-[gray]/30 fixed bottom-0 z-50 backdrop-blur-sm">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Player
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={songs}
          setSongs={setSongs}
          songsClone={songsClone}
          setClone={setSongsClone}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
