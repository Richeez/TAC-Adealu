import styled from "styled-components";

export const SubText = styled.div`
width: 85%;
height:min-content;
border-radius: 1rem;
background:var(--linear-g04);
box-shadow: var(--box-shadow01);
padding: 3rem;
    
    @media screen and (max-width:40rem){
        width: 95%;
        padding: 1rem ;

    
}


h2{
    color: var(--dark-orange);
    font-size: 1.5rem;
}

p{
    font-size: 1.1rem;
    margin-top: 1rem;
}

@media screen and (max-width:40rem){
    padding: 1rem;
    
}

`;

export const ContentCont = styled(SubText)`
min-height:50vh;
padding: 3rem;



@media screen and (max-width:40rem){
    width: 100%;
    padding: 1rem;
    
}




`;