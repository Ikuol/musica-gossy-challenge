import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { songsContext } from "../context/context";
import SongC from "./SongC";

import "swiper/css";

const SongCard = ({ url, title }) => {
  const { addSongsToList } = useContext(songsContext);

  const [returnedSongs, setreturnedSongs] = useState([]);

  useEffect(() => {
    fetch(`https://musica-api.onrender.com/${url}`)
      .then(res => res.json())
      .then(
        response => {
          setreturnedSongs(response);
        },
        err => {
          console.log(err);
        }
      );
  }, [url]);

  useEffect(() => {
    addSongsToList(returnedSongs);
  });

  return (
    <div className="flex flex-col mt-10 gap-[20px] ml-[60px] w-[600px] lg:w-[1600px]">
      <div>
        <h1 className="text-white text-[20px] font-bold">{title}</h1>
      </div>
      <div className="flex flex-row gap-[20px]">
        <Swiper
          grabCursor={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          centeredSlidesBounds={true}
          pagination={false}
          className="mySwiper"
        >
          {returnedSongs?.length > 0
            ? returnedSongs.map((music, i) => (
                <SwiperSlide key={i}>
                  <SongC music={music} />
                </SwiperSlide>
              ))
            : null}
          ;
        </Swiper>
      </div>
    </div>
  );
};

export default SongCard;
