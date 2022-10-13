import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';


const Collection = ({imgUrl, title, artist, like}) => {

  return (
        <div className='flex flex-col items-end ml-[50px] mt-[25px]'>
          <div className='h-[300px] w-[300px]  rounded-[20px] min-w-[300px] min-h-[300px] hover:scale-110 transform transition duration-500' >
              <img src={imgUrl} alt="error" className='h-[300px] w-[300px]' />
          </div>
          <div className='flex flex-row justify-center gap-[100px] items-end mt-[-105px] z-10'>
            <div className='text-white flex flex-col mr-[55px]'>
                <h3 className='text-[25px]'>{title}</h3>
                <p className='text-[13px]'>{artist}</p>
                <p>{like}</p>
            </div>
            <div className='flex rounded-full bg-[#FACD66] h-[37px] w-[37px] mr-5'>
                <BsFillPlayFill className='m-auto text-white cursor-pointer'/>
            </div>
          </div>
        </div>
  )
}

export default Collection
