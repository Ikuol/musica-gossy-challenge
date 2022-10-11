import React from 'react'

const SongC = ({ imgUrl, text, artist }) => {
  return (
    <div className='flex flex-col gap-[10px]'>
        <div className='w-[153px] h-[153px] rounded-[25px]'>
                <img src={ imgUrl } alt="error" />
        </div>
        <div>
            <p className='text-white text-[14px]'>{ text }</p>
        </div>
        <div>
              <p className='text-white text-[12px]'>{ artist }</p>
        </div>
    </div>
  )
}

export default SongC
