import React from 'react';
import logo from '../assets/logo.svg';
import { NavLink } from "react-router-dom";
import {MdFeaturedVideo} from 'react-icons/md';
import {RiRadio2Fill} from 'react-icons/ri';
import {SiApplemusic} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';
import {BsPersonFill} from 'react-icons/bs';



const SideBar = () => {
  return (
    <div className='flex flex-col gap-[50px] w-[5%] mt-[15px]'>
      <div className='flex flex-row'>
            <img src={ logo } alt='logo' className='w-[38px] ml-[26%] h-14 object-contain justify-start'/>
      </div>
        <div className='md:flex flex-col w-[52px] h-[270px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center justify-center gap-[5px]'>
            <NavLink to='/'><AiFillHome className='w-[32px] h-14' id='logout'/></NavLink> 
            <NavLink to="./Library"><SiApplemusic className='w-[29px] h-14' id='logout'/></NavLink>
            <RiRadio2Fill className='w-[32px] h-14' id='logout'/>
            <MdFeaturedVideo className='w-[32px] h-14' id='logout'/>
        </div>

        <div className='md:flex flex-col w-[52px] h-[127px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center justify-center gap-[5px]'>
            <BsPersonFill className='w-[32px] h-14' id='logout'/>
            <IoMdLogOut className='w-[32px] h-14' id='logout'/>
        </div>
    </div>
  )
}

export default SideBar


