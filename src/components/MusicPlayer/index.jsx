import Controls from './Controls';
import Player from './Player';
import Seekbar from './Seekbar';
import Track from './Track';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {

  return (
    <div className="sm:px-12 px-8 w-full h-[140px] flex bg-[gray]/30 items-center justify-between fixed bottom-0 z-50 backdrop-blur-sm">
      <Track />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls />
        <Seekbar />
        <Player />
      </div>
      <VolumeBar />
    </div>
  );
};

export default MusicPlayer;
