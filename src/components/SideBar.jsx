import React, {useState} from 'react';
import logo from '../assets/logo.svg';
import { NavLink, useLocation } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import {MdFeaturedVideo} from 'react-icons/md';
import {RiRadio2Fill} from 'react-icons/ri';
import {SiApplemusic} from 'react-icons/si';
import {AiFillHome} from 'react-icons/ai';
import {IoMdLogOut} from 'react-icons/io';
import {BsPersonFill} from 'react-icons/bs';



const SideBar = () => {

  const {pathname} = useLocation();
  const [toggleMenu, setToggleMenu] = useState( false );

  return (
    <>
    <div className='flex-col hidden gap-[50px] w-[5%] mt-[15px] lg:block'>
      <div className='hidden flex-row lg:block'>
            <img src={ logo } alt='logo' className='w-[38px] ml-[26%] h-14 object-contain'/>
      </div>
        <div className='md:flex flex-col w-[52px] h-[270px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center justify-center gap-[5px]'>
            <NavLink to='/'>
              <AiFillHome 
                className={
                  `w-[32px]
                   h-14 
                   ${pathname === '/'?"home":'' || pathname === '/Album/:chartId'?"home":'' || pathname === '/Lyrics/:i'?"home":'' }`
                } 
                id='logout'
              />
            </NavLink> 
            <NavLink to="/Library"><SiApplemusic className={`w-[29px] h-14  ${pathname === '/Library'?"home":''}`}id='logout'/></NavLink>
            <RiRadio2Fill className='w-[32px] h-14' id='logout'/>
            <MdFeaturedVideo className='w-[32px] h-14' id='logout'/>
        </div>

        <div className='md:flex flex-col w-[52px] h-[127px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center justify-center gap-[5px]'>
            <BsPersonFill className='w-[32px] h-14' id='logout'/>
            <IoMdLogOut className='w-[32px] h-14' id='logout'/>
        </div>
    </div>
      <div className='lg:hidden flex flex-row items-center gap-[20px]'>
            {toggleMenu
              ? <RiCloseLine color='#fff' size='27' onClick={ () => setToggleMenu(false)} />
              : <RiMenu3Line color='#fff' size='27' onClick={ () => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='fixed top-0 bottom-0 z-30 w-full transition-all ease-in duration-500 bg-[#1E1E1E]'>
                  <nav className='lg:hidden flex flex-col bg-darkblue-secondary mt-[30px] top-0 w-full justify-center text-white'>
                    <RiCloseLine color='#fff' size={'27'} onClick={ () => setToggleMenu(false)}/>
                      <div className="text-white text-2xl">
                        <NavLink to='/' className='flex flex-row items-center gap-[15px]'><AiFillHome className={`w-[32px] h-14 ${pathname === '/'?"home":'' || pathname === '/Album/:i'?"home":'' }`} id='logout'/>Home</NavLink> 
                        </div>
                      <div className="text-white text-2xl">
                        <NavLink to="/Library" className='flex flex-row items-center gap-[15px]'><SiApplemusic className={`w-[29px] h-14  ${pathname === '/Library'?"home":''}`}id='logout'/>My collection</NavLink>
                      </div>
                      <div className="text-white text-2xl">
                        <NavLink to='#' className='flex flex-row items-center gap-[15px]'>
                          <RiRadio2Fill className='w-[32px] h-14' id='logout'/>
                          Radio
                        </NavLink>
                      </div>
                      <div className="text-white text-2xl">
                        <NavLink to='#' className='flex flex-row items-center gap-[15px]'>
                          <MdFeaturedVideo className='w-[32px] h-14' id='logout'/>
                          Music videos
                        </NavLink>
                      </div>
                  </nav>
                </div>
            )}

            <div className='flex flex-row'>
                  <img src={ logo } alt='logo' className='w-[38px] h-14'/>
            </div>
      </div>
    </>
    
  )
}

export default SideBar


