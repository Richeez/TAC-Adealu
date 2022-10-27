import { FlexContainer, Text } from "../../../Styles/Styled";
import { ButtonLink } from "../../Buttons/NavButtonStyled";
import Carousel from "../../carousel/Carousel";
import { HomePage } from "./HomeStyled";
import Typewriter from "typewriter-effect";

function Home({ home, toggleNotRoutable }) {
  return (
    <HomePage>
      <div className="circle1" ref={home}>
        <div className="overlay">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Welcome To Church",
                  "Let nothing hinder your service to God",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <Carousel />
        <FlexContainer className="absolute">
          <ButtonLink>
            <Text>Offering</Text>
          </ButtonLink>
          <ButtonLink to="./" onClick={toggleNotRoutable}>
            <Text>Explore</Text>
          </ButtonLink>
        </FlexContainer>
      </div>
      <div className="circle2" />
    </HomePage>
  );
}

export default Home;
