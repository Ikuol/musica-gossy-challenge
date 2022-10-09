import React from 'react';
import { TopC } from '../containers';

const TopCharts = () => {
  return (
    <>
        <div>
            <div className='flex flex-col'>
                <h1>Top charts</h1>
                <TopC />
                <TopC />
                <TopC />
            </div>
        </div>
    </>
  )
}

export default TopCharts