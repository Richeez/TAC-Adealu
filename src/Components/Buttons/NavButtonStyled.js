import styled from "styled-components";

export const ButtonLink = styled.div`
width: 150px;
padding: .7rem 2rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: 30px;
background-color:var(--dark-orange);
transition: var(--transition);
cursor: pointer;

&:hover{
    filter: brightness(2);
    transition: var(--transition);


}

`;


export const Span = styled.span`

`;