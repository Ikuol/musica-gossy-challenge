import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchPopular } from '../redux/actions/action';

import 'swiper/css';

const SongCard = () => {
      const dispatch = useDispatch();
      useEffect(() => {dispatch(fetchData())},[]);
      useEffect(() => {dispatch(fetchPopular())},[]);
      let musics = useSelector((state) =>state.music);
      let populars = useSelector((state) =>state.popular);
  return (  
    <div className='flex flex-col mt-10 gap-[20px] ml-[60px] w-[600px] lg:w-[1600px]'>
        <div>
              <h1 className='text-white text-[20px] font-bold'>New Releases.</h1>
        </div>
        <div className='flex flex-row gap-[20px]'>
        <Swiper  
        grabCursor={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        centeredSlidesBounds={true}
        pagination={false}
        className="mySwiper">
            {musics?.length > 0 ? (musics.map((music,i)=>(
                  <SwiperSlide key={i}>
                        <div className='flex flex-col gap-[10px]'>
                              <div className='w-[153px] h-[153px] rounded-[25px]'>
                                    <img src={ music.cover } alt="error" className='w-153px h-[153px]' />
                              </div>
                              <div>
                                    <p className='text-white text-[14px] truncate w-[150px]'>
                                    { music.title }
                                    </p>
                              </div>
                              <div>
                                    <p className='text-white text-[12px] truncate w-[100px]'>
                                          { music.artist }
                                    </p>
                              </div>
                        </div>
                  </SwiperSlide>
            ))):null };
          </Swiper>
        </div>

        <div>
              <h1 className='text-white text-[20px] font-bold'>Popular in your area.</h1>
        </div>

        <Swiper  
        grabCursor={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        centeredSlidesBounds={true}
        pagination={false}
        className="mySwiper">

            {populars?.length > 0 ? (populars.map((popular,i)=>(
                  <SwiperSlide key={i}>
                        <div className='flex flex-col gap-[10px]'>
                              <div className='w-[153px] h-[153px] rounded-[25px]'>
                                    <img src={ popular.cover } alt="error" className='w-153px h-[153px]' />
                              </div>
                              <div>
                                    <p className='text-white text-[14px] truncate w-[150px]'>
                                    { popular.title }
                                    </p>
                              </div>
                              <div>
                                    <p className='text-white text-[12px] truncate w-[100px]'>
                                          { popular.artist }
                                    </p>
                              </div>
                        </div>
                  </SwiperSlide>
            ))):null };

          </Swiper>
    </div>
  )
}

export default SongCard


