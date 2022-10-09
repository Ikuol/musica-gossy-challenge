import React from 'react';
import logo from '../assets/logo.svg';
import home from '../assets/home.svg';
import song from '../assets/song.svg';
import radio from '../assets/radio.svg';
import sort from '../assets/sort.svg';
import person from '../assets/person.svg';




const SideBar = () => {
  return (
    <div className='flex flex-col gap-[50px] w-[5%] mt-[25px]'>
            <img src={ logo } alt='logo' className='w-[38px] ml-[25%] h-14 object-contain justify-start'/>
        <div className='md:flex flex-col w-[52px] h-[230px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center'>
            <img src={ home } alt='logo' className='w-full h-14 object-contain'/>
            <img src={ song } alt='logo' className='w-[38px] h-14 object-contain'/>
            <img src={ radio } alt='logo' className='w-[38px] h-14 object-contain'/>
        </div>

        <div className='md:flex flex-col w-[52px] h-[150px] rounded-[32px] ml-5 bg-[#1A1E1F] items-center'>
            <img src={ person } alt='logo' className='w-[38px] h-14 object-contain'/>
            <img src={ sort } alt='logo' className='w-[38px] h-14 object-contain decoration-[#EFEEE040]'/>
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
