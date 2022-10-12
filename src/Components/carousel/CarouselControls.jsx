import React from 'react'

const CarouselControls = ({prev, next}) => {
  return (
    <div className='controls'>
<span onClick={prev} className="prev" >&#10094;</span>
<span onClick={next} className="next" >&#10095;</span>
    </div>
  )
}

export default CarouselControls