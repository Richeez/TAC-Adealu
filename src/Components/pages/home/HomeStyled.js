import styled from "styled-components";

export const HomePage = styled.section`

width: 100%;
margin-top: 8rem;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
position: relative;


@media screen and (max-width: 57rem){
  
  margin-top: 1rem;
  
}

@media screen and (max-width: 40rem){

  margin-top: 8rem;

}

.circle1{
   width :100% ;
   height: 30rem;
   border-bottom-left-radius: 50%;
   border-bottom-right-radius: 50%;   
   position: absolute;
   z-index: 1;
   padding-top: 3rem;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content:center;
   background-blend-mode: multiply;
   background:var(--linear-g05);
   background-color:var(--ash-color);
   transform: translateY(-30%); 

   .absolute{
  margin-top: 15%;
  gap: 5rem;
  z-index: 3;
  
}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
background:var(--linear-g06); 
 

  pointer-events: none;
  h1{
    margin-top: -8rem;
    width: 100%;
    font-size: 3rem;
    padding: 0 1rem;
    text-transform: capitalize;
    letter-spacing: 3.5px;
    text-align: center;
    color: var(--white-color-01);
    font-family: 'Tangerine', cursive;

  }

}



}


.circle2{
      width :100%;
    height: 30rem;
    border-bottom-left-radius: 50%;
   border-bottom-right-radius: 50%;   
background:linear-gradient(to right, var(--dark-blue) 30%, var(--dark-orange) 70%);
   background-color: var(--dark-blue);
   position: absolute;
 transform: translateY(-25%);
 /* top: 0; */

 }






@media screen and (max-width:40rem){
  
}

`;