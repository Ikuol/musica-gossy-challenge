import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../components";

const Library = () => {
  const [onCollection, setOnCollection] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="lg:relative lg:flex">
      <div className="flex-1 flex flex-col mt-[-10px]">
        <div className="flex flex-row mt-[40px] m-auto lg:ml-[50px] gap-[25px]">
          <Button
            Border={"none"}
            text={"My collection"}
            className={`${
              onCollection ? "bg-[#FACD66]" : " bg-[#1D2123]"
            } w-[200px] text-gray-400 cursor-pointer `}
            onClick={() => {
              navigate("/collections");
              setOnCollection(true);
            }}
          />
          <Button
            Border={"1px solid gray"}
            text={"Likes"}
            className={`${
              !onCollection ? "bg-[#FACD66]" : " bg-[#1D2123]"
            } w-[80px] text-gray-400 cursor-pointer `}
            onClick={() => {
              navigate("/collections/likes");
              setOnCollection(false);
            }}
          />
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Library;
