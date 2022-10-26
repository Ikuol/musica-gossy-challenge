import React, {useEffect} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylist } from '../redux/actions/action';




const TopCharts = () => {
    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchPlaylist())},[])
    let playlists = useSelector((state) =>state.playlist);
  return (
    <>
        <div>
            <div className='flex-1 flex flex-col gap-[20px] mt-[30px]'>
                <div>
                  <h1 className='text-white text-[25px] font-bold'>Top charts</h1>
                </div>
                {playlists?.length > 0 ? (playlists.slice(0,3).map((playlist, index)=>(

                    <div className='flex flex-row w-[550px] h-[110px] rounded-[20px] bg-[#1A1E1F] items-center justify-between mr-[90px]' key={index}>
                      <div className='flex flex-row gap-[15px] text-white items-center ml-4'>
                          <div>
                              <img src={ playlist.cover } alt="error" className='w-[63px] h-[63px]' />
                          </div>
                          <div>
                              <NavLink to={`/Album/${index+1}`}><p className='cursor-pointer'>{ playlist.title }</p></NavLink>   
                              <p className='text-[14px] text-[gray]'>{ playlist.artist }</p>
                              <p>{ '2:30' }</p>
                          </div>
                      </div>
                      <div className='flex rounded-full border border-[gray] h-[37px] w-[37px] mr-5'>
                        <AiOutlineHeart className='text-[#FACD66] m-auto'/>
                      </div>
                    </div>

                ))):null};
            </div>
        </div>
    </>
  )
}

export default TopCharts