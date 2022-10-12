import React from 'react'

const Button = ({bgColor, Width, Border, Color, text}) => {
  return (
    <div>
        <button className='rounded-[27px] h-[57px]' style={{ background: `${bgColor}`, width:`${Width}`, border:`${Border}`, color:`${Color}`}}>{text}</button>
    </div>
  )
}

export default Button