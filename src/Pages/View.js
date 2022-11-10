import React from 'react';
import { SearchBar, SideBar, SongCard, TopCharts, Welcome } from '../components';


const view = () => {

  return (
    <div className='lg:relative lg:flex'>
        <SideBar />
      <div className='flex lg:hidden flex-row justify-between p-[20px] items-baseline'>
      <SideBar />
      <SearchBar />
    </div>
      <div className='flex-1 flex flex-col mt-[-10px] relative'>
          <SearchBar />
          <div className='flex-1 flex flex-row items-center gap-[100px] m-auto justify-between' id='id1'>
            <Welcome />
            <TopCharts />
          </div>
          <SongCard url={'new'} title={'New releases.'}/>
          {/* geo.ipify.org/docs : api for songs in my area */}
          <SongCard url={'popular'} title={'Popular in your area.'}/>
      </div>
    </div>
  )
}

export default view