import React, {useContext} from 'react';
import { songsContext } from '../context/context';
const SongC = ({music}) => {
    const { getSongToPlay } = useContext(songsContext);
  return (
    <div onClick={() => getSongToPlay(music.id)} className='flex flex-col gap-[10px] cursor-pointer'>
            <div className='w-[153px] h-[153px] rounded-[25px]'>
                <img src={ music && music.cover } alt="error" className='w-153px h-[153px]' />
            </div>
            <div>
                <p className='text-white text-[14px] truncate w-[150px]'>
                { music && music.title }
                </p>
            </div>
            <div>
                <p className='text-white text-[12px] truncate w-[100px]'>
                    { music && music.artist }
                </p>
            </div>
    </div>
  )
}

export default SongC