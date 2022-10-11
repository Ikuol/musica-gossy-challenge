import React from 'react'

const Collection = ({imgUrl}) => {
  return (
    <>
    <div className='h-[234px] w-[213px] ml-[50px] mt-[25px] rounded-[20px]' style={{ backgroundImage: `url(${imgUrl})`}}>

    </div>
    </>
  )
}

export default Collection


// height: 234px;
// width: 213px;
// left: 0px;
// top: 0px;
// border-radius: 20px;
