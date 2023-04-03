import React from 'react'
import headerDropDownMockData from '../../../lib/HeaderDropDownMockData/HeaderDropDownMockData'

function HeaderMenuOpenOnHover() {
  return (
    <ul className="absolute flex-center bg-white opacity-0 top-[11rem] right-0 z-50 bg-transparent transition-all duration-300 w-full px-6 pt-6 pb-8">
    {headerDropDownMockData.map((item, index)=>{
        return <li key={index}>{item.text}</li>
    })}
  </ul>
  )
}

export default HeaderMenuOpenOnHover