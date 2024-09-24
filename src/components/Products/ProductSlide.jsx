import React from 'react'
import {data} from "./MockData";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ProductSlide = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <div className='my-20'>
    <h1 className='text-3xl md:text-5xl font-extrabold my-6 ml-10'>
        Our <span className='text-orange-700'>Services</span>
      </h1>
    <div className='relative flex items-center'>
    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40}/>
      <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
      {data.map((item)=>(
        <img className="w-[220px] h-[220px] inline-block rounded-xl p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 object-cover" key={item.id} src={item.img} alt="/" />
      ))}
      </div>
      <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40}/>
    </div>

    </div>
  )
}

export default ProductSlide
