import { useState } from 'react';
import Player from './Player';


const MusicPlayer = () => {

    const [songs, setSongs] = useState([
      {
        id: "popular-3",
        artist: "Burna Boy",
        title: "Last Last",
        cover: "https://musica-api.up.railway.app/cover/cover_13.jpg",
        audio: "https://musica-api.up.railway.app/audio/audio_13.mp3",
      },
      {
        id: "popular-4",
        artist: "Kizz Daniel ft Tekno",
        title: "Buga",
        cover: "https://musica-api.up.railway.app/cover/cover_14.jpeg",
        audio: "https://musica-api.up.railway.app/audio/audio_14.mp3",
      },
    ]);

    const [songsClone, setSongsClone] = useState([
      {
        id: "popular-3",
        artist: "Kizz Daniel ft Tekno",
        title: "Buga",
        cover: "https://musica-api.up.railway.app/cover/cover_13.jpg",
        audio: "https://musica-api.up.railway.app/audio/audio_13.mp3",
      },
      {
        id: "popular-4",
        artist: "Burna Boy",
        title: "Last Last",
        cover: "https://musica-api.up.railway.app/cover/cover_14.jpeg",
        audio: "https://musica-api.up.railway.app/audio/audio_14.mp3",
      },
    ]);

  const [currentSong, setCurrentSong] = useState(songs[0]);

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