import React, {useEffect} from 'react';
import { SongC } from '../containers';
import { song1, song2, song3, song4, song5} from './imports';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions/action';

import 'swiper/css';

const SongCard = () => {
      const dispatch = useDispatch();
      useEffect(() => {dispatch(fetchData())})
      let musics = useSelector((state) =>state.music);
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
                                    <img src={ music.images?.coverart } alt="error" />
                              </div>
                              <div>
                                    <Link to={`/songs/${music?.key}`}>
                                          <p className='text-white text-[14px] truncate w-[150px]'>
                                          { music.title }
                                          </p>
                                    </Link>
                              </div>
                              <div>
                                    <Link to={music.artists ? `/artists/${music?.artists[0]?.adamid}` : '/top-artists'}>
                                          <p className='text-white text-[12px] truncate w-[100px]'>
                                                { music.subtitle }
                                          </p>
                                    </Link>
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
              <SwiperSlide><SongC imgUrl={ song1 } text='Life in a bubble' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song2 } text='Mountains' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song3 } text='Limits' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song4 } text='Everythings black' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song5 } text='Life in a bubble' artist='Drake'/></SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song1 } text='Nomad' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song2 } text='Mountains' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song3 } text='Limits' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song4 } text='Everythings black' artist='Drake'/> </SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song5 } text='Nomad' artist='Drake'/></SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song5 } text='Nomad' artist='Drake'/></SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song5 } text='Nomad' artist='Drake'/></SwiperSlide>
              <SwiperSlide><SongC imgUrl={ song5 } text='Nomad' artist='Drake'/></SwiperSlide>
          </Swiper>
    </div>
  )
}

export default SongCard


