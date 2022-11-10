import React, {useEffect, useContext} from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import axios from 'axios';
import { songsContext } from '../context/context';
import { NavLink } from "react-router-dom";


const TopCharts = () => {

  const {
    charts,
    setCharts,
    addChartsToSongs
  } = useContext(songsContext);

  useEffect(() => {
    axios
      .get("https://musica-api.up.railway.app/playlist")
      .then((res) => {
        setCharts(res.data);
        addChartsToSongs(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[setCharts, addChartsToSongs, charts])

  return (
    <>
        <div>
            <div className='flex-1 flex flex-col gap-[20px] mt-[30px]'>
                <div>
                  <h1 className='text-white text-[25px] font-bold'>Top charts</h1>
                </div>
                {charts?.length > 0 ? (charts.slice(1,4).map((chart,i)=>(
                    <div className='flex flex-row w-[550px] h-[110px] rounded-[20px] bg-[#1A1E1F] items-center justify-between mr-[90px]' key={i}>
                      <div className='flex flex-row gap-[15px] text-white items-center ml-4'>
                          <div>
                              <img src={ chart.cover } alt="error" className='w-[63px] h-[63px]' />
                          </div>
                          <div>
                              <NavLink to={`/Album/${chart.id}`}><p className='cursor-pointer'>{ chart.title }</p></NavLink>   
                              <p className='text-[14px] text-[gray]'>{ chart.artist }</p>
                              <p>{ chart.files.length } Songs</p>
                          </div>
                      </div>
                      <div className='flex rounded-full border border-[gray] h-[37px] w-[37px] mr-5'>
                        <AiOutlineHeart className='text-[#FACD66] m-auto'/>
                      </div>
                    </div>
                 ))):null };
            </div>
        </div>
    </>
  )
}

export default TopCharts