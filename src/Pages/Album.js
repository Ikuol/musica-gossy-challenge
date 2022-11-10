import React, {useContext, useEffect} from 'react'
import { SearchBar, SideBar, Presentation, TrackIn } from '../components';
import { songsContext } from '../context/context';
import { useParams } from 'react-router-dom';


const Album = () => {
    let {chartId} = useParams();

    const { 
        chartToBeViewed, 
        getChartToBeViewed,
        // songs, 
        // setSongs, 
        // setCurrentSong 
    } = useContext(songsContext);

    useEffect(() => {
        getChartToBeViewed(chartId);
    },[chartId, getChartToBeViewed]);

    // const handlePlayPlaylist = useCallback(async () => {
    //     await setSongs([...chartToBeViewed.files]);
    //     setCurrentSong(songs[0]);
    // }, [chartToBeViewed, setCurrentSong, setSongs, songs]);
    
    // useEffect(() => {
    // handlePlayPlaylist();
    // }, [chartToBeViewed, handlePlayPlaylist]);

        return (
            <div className='relative flex'>?
                <SideBar />
                <div className='flex-1 flex flex-col mt-[-10px]'>
                    <SearchBar />
                    <div className='flex-1 flex flex-row items-center ml-[80px] mt-[50px]'>
                        <Presentation 
                            imgUrl={ chartToBeViewed?.cover } 
                            title={chartToBeViewed?.title} 
                            description={chartToBeViewed?.info}
                            duration={'64 songs ~ 16 hrs+'} 
                        />
                    </div>
                    <div className='flex flex-col gap-[20px] mt-[60px]'>

                        {chartToBeViewed && chartToBeViewed.files.map((playlist, index) => (
                            <TrackIn
                                key={playlist.id}
                                playlist={playlist}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
        </div>
        )
}

export default Album