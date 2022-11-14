import React,{useContext} from 'react';
import { songsContext } from '../context/context';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsThreeDotsVertical} from 'react-icons/bs';

const TrackIn = ({ playlist, index }) => {

    const { 
        chartToBeViewed, 
        songs, 
        setSongs, 
        setCurrentSong 
    } = useContext(songsContext);

    const handleClick = async () => {
        await setSongs([...chartToBeViewed.files]);
        setCurrentSong(songs[index]);
      };

  return (
    <div className='flex flex-row h-[56px] w-[1650px] ml-[80px] rounded-[15px] bg-[#33373B] justify-between items-center p-[15px] cursor-pointer' onClick={handleClick}>
            <div className='flex flex-row gap-[15px] items-center'>
                <div className='h-[39px] w-[39px] rounded-[8.53px]'>
                    <img src={ playlist && playlist.cover } alt="error" />
                </div>
                <div>
                    <AiOutlineHeart className='text-[#fff]'/>
                </div>
            </div>

            <div>
                <p className='text-white w-[200px] h-[14px] leading-[14.4px]'>{ playlist && playlist.title }</p>
            </div>
            <div>
                <p className='text-white w-[34px] h-[14px] leading-[14.4px]'>{ 'Single' }</p>
            </div>
            <div>
                <p className='text-white w-[20px] h-[14px] leading-[14.4px]'>{ playlist && playlist.duration }</p>
            </div>
            <div>
                <BsThreeDotsVertical className='text-[#FACD66] font-[700]' />
            </div>
    </div>
  )
}

export default TrackIn
