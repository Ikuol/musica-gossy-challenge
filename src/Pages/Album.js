import React from 'react'
import { SearchBar, SideBar, Presentation, TrackIn } from '../components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Album = () => {
    let {i} = useParams();
    let playlists = useSelector((state) =>state.playlist);
    console.log(playlists);
  return (
    <div className='relative flex'>
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
                {playlists?.length > 0 ? (playlists.map((playlist,k)=>(
                    <TrackIn
                        imgUrl={ playlist.files[i-1].cover }
                        title={playlist.files[i-1].title}
                        type={'Single'}
                        duration={playlist.files[i-1].duration}
                        key={k}
                    />
                ))):null };
            </div>
        </div>
  </div>
  )
}

export default Album