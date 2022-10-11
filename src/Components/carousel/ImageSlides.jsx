import {useState, useEffect} from 'react';
import { BGImage } from '../../Styles/Styled';


const ImageSlides = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
const slideInterval = setInterval(() => {
  setCurrentSlide(prev => prev < slides.length - 1 ? prev + 1 : 0 )  
}, 3000)  
    return () => clearInterval(slideInterval)   
  }, [slides.length]);
  

  return (
    slides.map((slide, index) => (
   <div className="img" style={{transform:`translateX(${currentSlide * -100}%)`}}>
    <BGImage src={slide.img} key={index} alt='image'/>
              
            </div>

    ))
      )
}

export default ImageSlides