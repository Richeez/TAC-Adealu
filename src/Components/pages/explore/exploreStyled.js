import styled from "styled-components";

export const StyledContainer = styled.section.attrs((props) => ({
    width: props.width || "100%",
    hasPadding: props.hasPadding || false,
    bgColor: props.bgColor || 'yellow'

}))`
--bg-color: #061e3a;
    --container-padding: 20px;
    width: ${(props) => props.width}; // Falls back to 100%
    padding: ${(props) =>
        (props.hasPadding && "var(--container-padding)") || "none"};
    background-color: ${(props) =>
        (props.bgColor)};
  `;
