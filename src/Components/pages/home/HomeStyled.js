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

.img-cont{
  overflow-y: hidden;
  display: flex;
overflow-x: scroll;
margin: 0 auto; 
min-width: 500px;
height: 500px;
white-space: nowrap;
position: relative;
  scroll-snap-type: x mandatory;


}

.img-cont > *{
  display: inline-block;
  min-width: 100%;
   scroll-snap-align: center;

}

.img{
  transition: 1s ease;
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

 .dots-cont{
    position: absolute;
    top: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
 }

 .dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  z-index: 3;
  background-color: var(--white-color-01);
  border: 2px solid var(--dark-blue-bg) ;
}

.active, .dot:hover {
  background-color: var(--dark-orange);
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: .89rem;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  z-index: 3;

}

.next {
  right: 3%;
  border-radius: 0 2rem 2rem 0;
}
.prev {
  left: 3%;
  border-radius: 2rem 0 0 2rem;
}

.prev:hover, .next:hover {
  background-color: var(--transparent-color-01);
}


@media screen and (max-width:40rem){
  
}

`;