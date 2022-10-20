import { useState, useEffect } from 'react';
import Player from './Player';
import Seekbar from './Seekbar';
import VolumeBar from './VolumeBar';


const MusicPlayer = () => {

  const [songs] = useState([
    {
      title:'Question',
      artist:'Burna Boy ft Don jazzy',
      img_src:'../../assets/images.jpeg',
      src:'../../music/Question.mp3'
    },
    {
      title:'Want it all',
      artist:'Burna Boy ft Polo G',
      img_src:'../../assets/images.jpeg',
      src:'../../music/WantItAll.mp3'
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setCurrentSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length - 1){
          return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  },[])

  return (
    <div className="sm:px-12 px-8 w-full h-[140px] flex bg-[gray]/30 items-center justify-between fixed bottom-0 z-50 backdrop-blur-sm">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Seekbar />
        <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
         />
      </div>
      <VolumeBar />
    </div>
  );
};

export default MusicPlayer;
