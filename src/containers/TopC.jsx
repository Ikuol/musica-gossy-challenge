import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import { NavLink } from "react-router-dom";



const TopC = ({imgUrl,title,artist,duration}) => {
  return (
    <div className='flex flex-row w-[550px] h-[110px] rounded-[20px] bg-[#1A1E1F] items-center justify-between mr-[90px]'>
            <div className='flex flex-row gap-[15px] text-white items-center ml-4'>
                <div>
                     <img src={ imgUrl } alt="error" />
                </div>
                <div>
                    <NavLink to='/Album'><p className='cursor-pointer'>{ title }</p></NavLink>   
                    <p className='text-[14px] text-[gray]'>{ artist }</p>
                    <p>{ duration }</p>
                </div>
            </div>
            <div className='flex rounded-full border border-[gray] h-[37px] w-[37px] mr-5'>
              <AiOutlineHeart className='text-[#FACD66] m-auto'/>
            </div>
    </div>
  )
}


export default TopC