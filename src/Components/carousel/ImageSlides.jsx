import {useState, useEffect, useRef} from 'react';
import { BGImage } from '../../Styles/Styled';
import CarouselControls from './CarouselControls';
import CarouselIndicator from './CarouselIndicator';


const ImageSlides = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideInterval = useRef(null)

  const startSlideTimer = ()=>{
    stopSlideTimer()

    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : 0 )  
    }, 3000)  
    
  }

  const stopSlideTimer = () =>{
    if (slideInterval.current) {
      
      clearInterval(slideInterval.current)
    }
  }

  const prev = ()=>{
    startSlideTimer()

    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;

    setCurrentSlide(index)
  }

  const next = ()=>{
    startSlideTimer()

    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;

    setCurrentSlide(index)
  }

  const switchSlide = (index) => {
    startSlideTimer()
    setCurrentSlide(index)

  }

  useEffect(() => {
    startSlideTimer()

    return () =>  stopSlideTimer()  
  }, []);

  

  return (
    <>
<div onMouseEnter={stopSlideTimer} onMouseOut={startSlideTimer} className="inner-container">
    {slides.map((slide, index) => (
   <div className="img" style={{transform:`translateX(${currentSlide * -100}%)`}}>
    <BGImage src={slide.img}  key={index} alt='image'/>
              
            </div>

    ))}
    <CarouselControls prev={prev} next={next}/>
    <CarouselIndicator slides={slides} currentSlide={currentSlide} switchSlide={switchSlide}/>
    </div>
    </>
      )
}

export default ImageSlides