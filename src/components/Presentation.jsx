import React, { useContext } from "react";
import { authContext } from "../context/authContext";

const Presentation = ({ chartToBeViewed, playAll }) => {
  const { addToUserCollection } = useContext(authContext);
  return (
    <div className="flex flex-row gap-[50px] items-end">
      <div className="flex h-[289px] w-[284px] rounded-[35px]">
        <img
          src={chartToBeViewed && chartToBeViewed.cover}
          alt="error"
          className="h-[289px] w-[284px]"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-[20px] mb-[50px]">
          <h1 className="text-[#A4C7C6] text-[35px] leading-[42px] font-[700]">
            {chartToBeViewed && chartToBeViewed.title}
          </h1>
          <p className="text-white leading-[16.8px] font-[400] w-[800px]">
            {chartToBeViewed && chartToBeViewed.description}
          </p>
          <p className="text-white leading-[16.8px] font-[400]">{"64 songs ~ 16 hrs+"}</p>
        </div>
        <div className="flex flex-row gap-[15px]">
          <button
            className="w-[87px] h-[36px] rounded-[32px] text-white bg-[gray]/30 backdrop-blur-sm"
            onClick={() => playAll()}
          >
            Play
          </button>
          <button
            className="w-[151px] h-[36px] rounded-[32px] text-white bg-[gray]/30 backdrop-blur-sm"
            onClick={() => addToUserCollection(chartToBeViewed)}
          >
            Add to collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
