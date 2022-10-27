import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLink = styled(Link)`
width: 150px;
padding: .7rem 2rem;
display: flex;
align-items: center;
text-decoration: none;
justify-content: center;
border-radius: 30px;
background-color:var(--dark-orange);
transition: var(--transition);
cursor: pointer;
color: var(--white-color-01);
&:hover{
    filter: brightness(2);
    transition: var(--transition);


}

`;


export const Span = styled.span`

`;