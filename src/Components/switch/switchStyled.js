import styled from "styled-components";


export const SwitcherCont = styled.div`
display: flex;
width: max-content;
align-items: center;
justify-content: center;
p{
    font-size: .8rem;
    width: max-content;
    margin: 0 1rem;
}
`;

export const Label = styled.label`
position: relative;
width: 5rem;
height: 2rem;

input{
    display: none;

}



`;

export const Switch = styled.input`

&:checked + span{
}

&:checked + span::before{
    transform :translateX(130%);

    @media screen and (min-width:40rem){


    }

}    



`;


export const Slider = styled.span`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: flex-start;
border: 2px inset var(--transparent-color-01);
background: linear-gradient(var(--grey-2), var(--white-color-01));
border-radius: 4rem;
transition: var(--transition);
cursor: pointer;


&::before{
    content: '';
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    left: 5px;
    background: radial-gradient(  circle, var(--light-orange01), var(--dark-orange));
    transition: var(--transition);

    
}

`;

