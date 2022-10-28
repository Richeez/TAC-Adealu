import { StyledCarousel } from "./carouselStyled";
import ImageSlides from "./ImageSlides";

const Carousel = () => {
  return (
    <StyledCarousel>
      <ImageSlides controls indicators width={1000} />
    </StyledCarousel>
  );
};

export default Carousel;
