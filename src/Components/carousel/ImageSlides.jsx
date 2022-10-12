import {useState, useEffect} from 'react';
import { BGImage } from '../../Styles/Styled';
import CarouselControls from './CarouselControls';
import CarouselIndicator from './CarouselIndicator';


const ImageSlides = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
// const slideInterval = setInterval(() => {
//   setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : 0 )  
// }, 3000)  
//     return () => clearInterval(slideInterval)   
//   }, [slides.length]);

  const prev = ()=>{
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;

    setCurrentSlide(index)
  }

  const next = ()=>{
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;

    setCurrentSlide(index)
  }
  

  return (
    <>
<div className="inner-container">
    {slides.map((slide, index) => (
   <div className="img" style={{transform:`translateX(${currentSlide * -100}%)`}}>
    <BGImage src={slide.img} key={index} alt='image'/>
              
            </div>

    ))}
    <CarouselControls prev={prev} next={next}/>
    <CarouselIndicator/>
    </div>
    </>
      )
}

export default ImageSlides