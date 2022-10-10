import React from 'react';
import photo from '../assets/photo.svg';
import group from '../assets/Group.png';
import heart  from '../assets/heart.svg';
import {BsHeart} from 'react-icons/bs';

const Welcome = () => {
  return (
    <>
    <div className='flex flex-row justify-between lg:w-full h-full ml-[40px] mt-[35px] rounded-[40px] bg-[#609EAF]' id='div'>
        <div className='flex flex-col p-[50px] justify-between'>
            <div>
                <p className='text-white font-serif text-[16px]'>Currated playlist</p>
            </div>
            <div className='w-[276px] h-[51px] mt-[-65px]'>
                <h1 className='text-white font-bold text-[45px]'>R & B Hits</h1>
                <p className='text-white text-[15px] font-sans'>All mine, Lie again, Petty call me everyday,
                    Out of time, No love, Bad habit,
                    and so much more
                </p>
            </div>
            <div className='w-[120px] flex flex-row gap-[15px] items-center'>
                <img src={ group } alt="error" />
                <BsHeart />
                 <p className='text-white text-[15px] whitespace-nowrap'>33k Likes</p>
            </div>
        </div>
        <div className='flex justify-end'>
            <img src={photo} alt="error" className=''/>
        </div>
    </div>
    </>
  )
}

export default Welcome