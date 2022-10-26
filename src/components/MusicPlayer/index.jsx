import { useState, useEffect } from 'react';
import Player from './Player';
import VolumeBar from './VolumeBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions/action';
import img from '../../assets/images.jpeg';
import song6 from "./song6.png";
import { music1, music2, music3, music4, music5 } from '../../music';


const MusicPlayer = () => {

    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchData())},[])
    let musics = useSelector((state) =>state.music);

  const [songs] = useState([
    {
      title:'Question',
      artist:'Burna Boy ft Don jazzy',
      img_src:`${img}`,
      src:`${music1}`
    },
    {
      title:'Want it all',
      artist:'Burna Boy ft Polo G',
      img_src:`${img}`,
      src:`${music2}`
    },
    {
      title:'Easy On Me',
      artist:'Adele',
      img_src:`${song6}`,
      src:`${music3}`
    },
    {
      title:'Crazy Things',
      artist:'Tems',
      img_src:`${img}`,
      src:`${music4}`
    },
    {
      title:'Save Your Tears',
      artist:'The weeknd',
      img_src:`${img}`,
      src:`${music5}`
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex] = useState(currentSongIndex + 1);

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
    <div className="sm:px-12 px-8 w-full h-[140px] flex bg-[gray]/30 fixed bottom-0 z-50 backdrop-blur-sm">
      <div className="flex-1 flex flex-col items-center justify-center">
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
