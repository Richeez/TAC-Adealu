import styled, { css } from "styled-components";

export const Text = styled.p`
width: 100%;
display: flex;
color: inherit;
white-space: nowrap;
justify-content: center;
align-items: center;
`;

export const Heading = styled.h2`
width: 100%;
display: flex;
text-transform: uppercase;
color: var(--white-color-01);
justify-content: center;
align-items: center;

 ${(props) => props.white && css`

 color: var(--white-color-01)
 
 `} 

@media screen and (max-width:40rem){
font-size: 1.5rem;
    
}

`;


export const FlexContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;



@media screen and (max-width:40rem){
    flex-direction: column;
    gap: 2rem !important;
    margin-bottom:-7rem;
  
}

/* ${(props) => props.displayRow && css`
    flex-direction: row;
    background-color: green;
  


`}  */


`;

export const OverFlowContX = styled.div`
width: 1200px;
/* gap: 20rem; */
display: flex;
align-items: center;
justify-content: center;
white-space: nowrap;


`;

export const BGImage = styled.img`
width: 100%;
height: 100%;
background-position: center;
object-fit: contain;


`;

export const Image = styled(BGImage)`
width: 100%;
height: 100%;
object-fit: cover;


`;

