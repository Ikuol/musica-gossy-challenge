import React from 'react'
import { SearchBar, SideBar, Index, Presentation, TrackIn } from '../components';
import img3 from '../assets/img3.svg';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Album = () => {
    let {i} = useParams();
    let musics = useSelector((state) =>state.music);
    console.log(musics);
  return (
    <div className='relative flex' 
        style={{
            backgroundImage:`url(${musics[i-1].images.coverart})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backdropFilter:'blur(10px)',
            opacity:'0.4',
            width: '100%',
        }}
    >
        <SideBar />
        <div className='flex-1 flex flex-col mt-[-10px]'>
            <SearchBar />
            <div className='flex-1 flex flex-row items-center ml-[80px] mt-[50px]'>
                <Presentation 
                    imgUrl={ musics[i-1].images.coverart } 
                    title={musics[i-1].title} 
                    description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'}
                    duration={'64 songs ~ 16 hrs+'} 
                    />
            </div>
            <div className='flex flex-col gap-[20px] mt-[60px]'>
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
                <TrackIn
                    imgUrl={ img3 }
                    title={'Let me love you ~ Krisx'}
                    type={'Single'}
                    duration={'4:17'}
                />
            </div>
        </div>
        <Index />
  </div>
  )
}

export default Album