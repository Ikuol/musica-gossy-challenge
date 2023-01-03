import React from "react";
import { SongCard, TopCharts, Welcome } from "../components";

const view = () => {
  return (
    <div className="flex flex-col px-[75px] pt-[15px]">
      <div className="flex-1 flex flex-row items-center gap-[100px] justify-between" id="id1">
        <Welcome />
        <TopCharts />
      </div>
      <SongCard url={"new"} title={"New releases."} />
      {/* geo.ipify.org/docs : api for songs in my area */}
      <SongCard url={"popular"} title={"Popular in your area."} />
    </div>
  );
};

export default view;
