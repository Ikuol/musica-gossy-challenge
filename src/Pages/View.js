import React from 'react';
import { SearchBar, SideBar, SongCard, TopCharts, Welcome } from '../components';
import Index from '../components/MusicPlayer';


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
          <SongCard />
      </div>
      <Index />
    </div>
  )
}

export default view