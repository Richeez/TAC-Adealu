import { StyledCarousel } from "./carouselStyled";
import ImageSlides from "./ImageSlides";

const Carousel = () => {
  const slides = [
    { img: "images/image__2.png" },
    { img: "images/service.jpeg" },
    { img: "images/celebration1.jpg" },
    { img: "images/celebrate-1.jpg" },
    { img: "images/celebrate-5.jpg" },
    { img: "images/image__3.png" },
  ];

  return (
    <StyledCarousel>
      <ImageSlides slides={slides} controls indicators width={1000} />
    </StyledCarousel>
  );
};

export default Carousel;
