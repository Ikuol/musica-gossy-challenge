import React from 'react';
import { TopC } from '../containers';
import img1 from '../assets/img1.svg';
import img2 from '../assets/img2.svg';
import img3 from '../assets/img3.svg';


const TopCharts = () => {
  return (
    <>
        <div>
            <div className='flex-1 flex flex-col gap-[20px]'>
                <div>
                  <h1 className='text-white text-[25px] font-bold'>Top charts</h1>
                </div>
                <TopC imgUrl={ img1 } title='Golden age of 80s' artist='Sean swadder' duration='2:34:45'/>
                <TopC  imgUrl={ img2 } title='Reggae “n” blues' artist='Dj YK mule' duration='1:02:42'/>
                <TopC  imgUrl={ img3 } title='Tomorrow’s tunes' artist='Obi Datti' duration='2:01:25'/>
            </div>
        </div>
    </>
  )
}

export default TopCharts