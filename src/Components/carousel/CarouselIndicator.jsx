import React from 'react'

const CarouselIndicator = ({slides, currentSlide, switchSlide}) => {
  return (
    <div className='dots-cont'>
       {slides.map((slide, index)=>(
    <span
    key={index} 
    className={`dot ${index === currentSlide ? 'active' : ''}`}
    onClick={()=>switchSlide(index)}
    ></span>
     ))}
  </div>
    )
}

export default CarouselIndicator