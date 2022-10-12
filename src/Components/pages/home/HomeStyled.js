import styled from "styled-components";

export const HomePage = styled.section`

width: 100%;
margin-top: 8rem;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
position: relative;
/* background-color: var(--transparent-color-01);
  background: var(--transparent-color-01); */

    // background-color: var(--dark-blue-bg);
    // background: var(--linear-g01);


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
    letter-spacing: 2px;
    text-align: center;
    font-family: 'Mea Culpa', cursive;

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