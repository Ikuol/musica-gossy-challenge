import React from 'react';
import heart from '../assets/heart.svg';

const TopC = ({imgUrl,title,artist,duration}) => {
  return (
    <div className='flex flex-row w-[550px] h-[110px] rounded-[20px] bg-[gray] items-center justify-between mr-[90px]'>
            <div className='flex flex-row gap-[15px] text-white items-center ml-4'>
                <div>
                     <img src={ imgUrl } alt="error" />
                </div>
                <div>
                    <p>{ title }</p>
                    <p className='text-[10px]'>{ artist }</p>
                    <p>{ duration }</p>
                </div>
            </div>
            <div className='border-[red]'>
                <img src={ heart } alt="error" className='p-[55px]' />
            </div>
    </div>
  )
}


export default TopC