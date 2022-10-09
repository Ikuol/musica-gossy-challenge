import React from 'react';
import heart from '../assets/heart.svg';

const TopC = ({imgUrl,title,artist,duration}) => {
  return (
    <>
    <div className='flex flex-row w-[417px] h-[96px] rounded-[20px] bg-[#1A1E1F]'>
            <div>
                <div>
                     <img src={ imgUrl } alt="error" />
                </div>
                <div>
                    <p>{ title }</p>
                    <p>{ artist }</p>
                    <p>{ duration }</p>
                </div>
            </div>
            <div>
                <img src={ heart } alt="error" />
            </div>
    </div>
    </>
  )
}

export default TopC