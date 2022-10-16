import {useState, useEffect, useRef} from 'react';
import { BGImage } from '../../Styles/Styled';
import CarouselControls from './CarouselControls';
import CarouselIndicator from './CarouselIndicator';


const ImageSlides = ({slides, indicators = false, controls = false, interval = 5000, autoSlide = true, width = 1000  }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideInterval = useRef(null)

  const startSlideTimer = ()=>{

    if (autoSlide) {

    stopSlideTimer()

    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : 0 )  
    }, interval) 
  } 
    
  }

  const stopSlideTimer = () =>{
    if (autoSlide && slideInterval.current) {
      
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
<div style={{maxWidth: width}} onMouseEnter={stopSlideTimer} onMouseOut={startSlideTimer}  className="inner-container">
    {slides.map((slide, index) => (
   <div className="img" style={{transform:`translateX(${currentSlide * -100}%)`}}>
    <BGImage src={slide.img}  key={index} alt='image'/>
              
    
    </div>
    ))}
    {controls && <CarouselControls prev={prev} next={next}/>}
{indicators && <CarouselIndicator  slides={slides} currentSlide={currentSlide} switchSlide={switchSlide}/>}    
</div>
    </>
      )
}

export default ImageSlides