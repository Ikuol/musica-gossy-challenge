import React from 'react'
import { SearchBar, SideBar, TopCharts, Welcome } from '../components';


const view = () => {
  return (
    <div className='relative flex'>
      <SideBar />
      <div className='flex-1 flex flex-col'>
          <SearchBar />
          <div className='flex-1 flex flex-row items-center justify-between'>
            <Welcome />
            <TopCharts />
          </div>
      </div>
    </div>
  )
}

export default view