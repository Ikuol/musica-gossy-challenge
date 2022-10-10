import React from 'react';
import logo from '../assets/logo.svg';
import {MdFeaturedVideo} from 'react-icons/md';
import {RiRadio2Fill} from 'react-icons/ri';
import {SiApplemusic} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';
import {BsPersonFill} from 'react-icons/bs';



const SideBar = () => {
  return (
    <div className='flex flex-col gap-[50px] w-[5%] mt-[25px]'>
      <div className='flex flex-row'>
            <img src={ logo } alt='logo' className='w-[38px] ml-[26%] h-14 object-contain justify-start'/>
      </div>
        <div className='md:flex flex-col w-[52px] h-[230px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center'>
            <AiFillHome className='w-[35px] h-14' id='logout'/>
            <SiApplemusic className='w-[32px] h-14' id='logout'/>
            <RiRadio2Fill className='w-[35px] h-14' id='logout'/>
            <MdFeaturedVideo className='w-[35px] h-14' id='logout'/>
        </div>

        <div className='md:flex flex-col w-[52px] h-[150px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center'>
            <BsPersonFill className='w-[35px] h-14' id='logout'/>
            <IoMdLogOut className='w-[35px] h-14' id='logout'/>
        </div>
    </div>
  )
}

export default SideBar


// height: 12.833333015441895px;
// width: 18.33333396911621px;
// left: 1.83331298828125px;
// top: 7.5625px;
// border-radius: 0px;
