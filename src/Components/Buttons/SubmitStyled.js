import styled from "styled-components";

export const Button = styled.button`
width: 100px;
padding: .7rem 1rem;
display: flex;
align-items: center;
justify-content: center;
border-radius: .5rem;
font-size: .9rem;
background-color:var(--dark-orange);
transition: var(--transition);
cursor: pointer;
border: none;
outline: none;
color: var(--white-color-01);

&:hover{
    filter: brightness(2);
    transition: var(--transition);


}

`;
