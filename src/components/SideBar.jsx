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
      <div className='flex flex-row'>
            <img src={ logo } alt='logo' className='w-[38px] ml-[26%] h-14 object-contain'/>
      </div>
        <div className='md:flex flex-col w-[52px] h-[270px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center justify-center gap-[5px]'>
            <NavLink to='/'><AiFillHome className={`w-[32px] h-14 ${pathname === '/'?"home":'' || pathname === '/Album/:i'?"home":'' }`} id='logout'/></NavLink> 
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
                  <nav className='lg:hidden flex bg-darkblue-secondary h-full top-0 w-full justify-center text-white'>
                    <RiCloseLine color='#fff' size={'27'} onClick={ () => setToggleMenu(false)}/>
                          <ul className="flex flex-col justify-center space-y-8 h-full items-center capitalize">
                              <li className="text-white text-2xl flex flex-row"><NavLink to='/'><AiFillHome className={`w-[32px] h-14 ${pathname === '/'?"home":'' || pathname === '/Album/:i'?"home":'' }`} id='logout'/>Home</NavLink> </li>
                              <li className="text-white text-2xl"><NavLink to="/Library"><SiApplemusic className={`w-[29px] h-14  ${pathname === '/Library'?"home":''}`}id='logout'/>My collection</NavLink></li>
                              <li className="text-white text-2xl"><RiRadio2Fill className='w-[32px] h-14' id='logout'/>Radio</li>
                              <li className="text-white text-2xl"><MdFeaturedVideo className='w-[32px] h-14' id='logout'/>Music videos</li>
                              <div className="flex items-center justify-center">
                                  <NavLink to="/" className="text-white text-2xl capitalize cursor-pointer">login</NavLink> 
                                  <span className="mx-6 text-white/20"> | </span>
                                  <button className="text-white text-2xl bg-blue-500 rounded-3xl px-4 py-1 capitalize">register</button>
                              </div>
                          </ul>
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


