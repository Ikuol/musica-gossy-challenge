import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';


const Collection = ({imgUrl, title, artist}) => {

  return (
        <div className='flex flex-col items-end justify-center bg-fixed'>
          <div className='h-[300px] w-[300px] ml-[50px] mt-[25px] rounded-[20px] object-cover max-w-[300px] max-h-[300px]' >
              <img src={imgUrl} alt="error" className='h-[300px] w-[300px] hover:scale-110 transform transition duration-500' />
          </div>
          <div className='flex flex-row justify-center gap-[100px] items-end mt-[-50px]'>
            <div className='text-white flex flex-col mt-[-50px]'>
                <h3 className='text-[25px]'>{title}</h3>
                <p>{artist}</p>
            </div>
            <div className='flex rounded-full border border-[gray] h-[37px] w-[37px] mr-5'>
                <BsFillPlayFill className='m-auto'/>
            </div>
          </div>
        </div>
  )
}

export default Collection
