import React, { useContext, useEffect, useCallback } from "react";
import { Presentation, TrackIn } from "../components";
import { songsContext } from "../context/context";
import { useParams } from "react-router-dom";

const Album = () => {
  let { chartId } = useParams();

  const { chartToBeViewed, getChartToBeViewed, songs, setSongs, setCurrentSong } =
    useContext(songsContext);

  useEffect(() => {
    getChartToBeViewed(chartId);
  }, [chartId, getChartToBeViewed]);

  // useCallback
  // Renvoie une fonction de rappel mémoïsée
  // C’est utile pour passer des fonctions de rappel
  // à des composants enfants optimisés qui se basent
  // sur une égalité référentielle pour éviter des
  // rendus superflus

  // Mémoisation:
  // mise en cache des valeurs de retour d'une fonction selon ses valeurs d'entrée

  const handlePlayPlaylist = useCallback(async () => {
    await setSongs([...chartToBeViewed.files]);
    setCurrentSong(songs[0]);
  }, [chartToBeViewed, setCurrentSong, setSongs, songs]);

  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col mt-[-10px]">
        <div className="flex-1 flex flex-row items-center ml-[80px] mt-[50px]">
          <Presentation chartToBeViewed={chartToBeViewed} playAll={handlePlayPlaylist} />
        </div>
        <div className="flex flex-col gap-[20px] mt-[60px]">
          {chartToBeViewed &&
            chartToBeViewed.files.map((playlist, index) => (
              <TrackIn key={playlist.id} playlist={playlist} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
