import { StyledCarousel } from './carouselStyled';
import ImageSlides from './ImageSlides';


const Carousel = () => {
   const slides =[
    {img:'images/image__1.png'},
    {img:'images/image__2.png'},
    {img:'images/image__3.png'},
    {img:'images/image__4.png'},
    {img:'images/celebrate-1.jpg'},
    {img:'images/celebrate-2.jpg'}
];


  
  return (
    <StyledCarousel>
    
    <ImageSlides slides={slides} controls indicators width={1000}  />

    </StyledCarousel>
    )
}

export default Carousel