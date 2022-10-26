import React from 'react'
import { SearchBar, SideBar, Index, Presentation, TrackIn } from '../components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Album = () => {
    let {i} = useParams();
    let playlists = useSelector((state) =>state.playlist);
    console.log(playlists);
  return (
    <div className='relative flex' 
        style={{
            backgroundImage:`url(${playlists[i-1].cover})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backdropFilter:'blur(10px)',
            width: '100%',
        }}
    >
        <SideBar />
        <div className='flex-1 flex flex-col mt-[-10px]'>
            <SearchBar />
            <div className='flex-1 flex flex-row items-center ml-[80px] mt-[50px]'>
                <Presentation 
                    imgUrl={ playlists[i-1].cover } 
                    title={playlists[i-1].title} 
                    description={playlists[i-1].info}
                    duration={'64 songs ~ 16 hrs+'} 
                    />
            </div>
            <div className='flex flex-col gap-[20px] mt-[60px]'>
                <TrackIn
                    imgUrl={ playlists.files[i].cover }
                    title={playlists.files[i].title}
                    type={'Single'}
                    duration={playlists.files[i].duration}
                />
            </div>
        </div>
        <Index />
  </div>
  )
}

export default Album