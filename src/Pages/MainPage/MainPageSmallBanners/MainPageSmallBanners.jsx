import React from 'react'
import banner1 from "../../../assets/images/data/small-banners/banner1.jpg"
import banner2 from "../../../assets/images/data/small-banners/banner2.jpg"

function MainPageSmallBanners() {
  return (
    <section className='container bg-transparent flex-center gap-6'>
    <img className='rounded-2xl' src={banner1} alt='Banner for advertising batteries for customers' />
    <img className='rounded-2xl' src={banner2} alt='Banner for advertising batteries for customers' />
    </section>
  )
}

export default MainPageSmallBanners