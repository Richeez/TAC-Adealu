import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { StyledContainer } from "./exploreStyled";

const Explore = ({ toggleNotRoutable }) => {
  return (
    <StyledContainer>
      <FontAwesomeIcon
        onClick={toggleNotRoutable}
        className="navigate_to_left"
        icon={["fa", "arrow-left-long"]}
      />
      <div>Explore</div>
    </StyledContainer>
  );
};

export default Explore;
