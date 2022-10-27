import React from "react";
import { StyledContainer } from "./exploreStyled";

const Explore = ({ toggleNotRoutable }) => {
  return (
    <StyledContainer>
      <div onClick={toggleNotRoutable}>Explore</div>
    </StyledContainer>
  );
};

export default Explore;
