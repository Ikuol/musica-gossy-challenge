import React from 'react';
import {AiFillHeart} from 'react-icons/ai';

const Presentation = ({imgUrl, title, description, duration}) => {
  return (
    <div className='flex flex-row gap-[50px] items-end'>
            <div className='flex h-[289px] w-[284px] rounded-[35px]'>
                <img src={ imgUrl } alt="error" className='h-[289px] w-[284px]'/>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col gap-[20px] mb-[50px]'>
                    <h1 className='text-[#A4C7C6] text-[35px] leading-[42px] font-[700]'>{ title }</h1>
                    <p className='text-white leading-[16.8px] font-[400] w-[800px]'>{ description }</p>
                    <p className='text-white leading-[16.8px] font-[400]'>{ duration }</p>
                </div>
                <div className='flex flex-row gap-[15px]'>
                    <button className='w-[87px] h-[36px] rounded-[32px] text-white bg-[gray]/30 backdrop-blur-sm'>Play</button>
                    <button className='w-[151px] h-[36px] rounded-[32px] text-white bg-[gray]/30 backdrop-blur-sm'>Add to collection</button>
                    <button className='flex justify-center items-center w-[36px] rounded-full bg-[gray]/30 backdrop-blur-sm text-[#8b2525]'> <AiFillHeart /> </button>
                </div>
            </div>
    </div>
  )
}

export default Presentation
