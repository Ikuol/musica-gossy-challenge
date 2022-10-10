import React from 'react'
import { SearchBar, SideBar, SongCard, TopCharts, Welcome } from '../components';


const view = () => {
  return (
    <div className='relative flex'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
          <SearchBar />
          <div className='flex-1 flex flex-row items-center justify-center lg:gap-[50px]'>
            <Welcome />
            <TopCharts />
          </div>
          <SongCard />
      </div>
    </div>
  )
}

export default view