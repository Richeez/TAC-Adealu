import styled from "styled-components";

export const StyledCarousel = styled.div`

  overflow-y: hidden;
  display: flex;
overflow-x: scroll;
margin: 0 auto; 
min-width: 500px;
height: 500px;
white-space: nowrap;
position: relative;
  scroll-snap-type: x mandatory;

  .inner-container{
    padding-top: 3rem;
    min-width: 500px;
    position: relative;
    display: flex;


    & > *{
      display: inline-block;
      min-width: 100%;
       scroll-snap-align: center;
       margin: 0 auto; 

    
    }

  }



.img{
  transition: 1s ease;
  display: flex;

}

.controls{
    width: 100%;
    background: orangered;

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


}

.dots-cont{
    position: absolute;
    top: 87%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    left: 50%;
    transform: translate(-50%, -50%);

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
  border: 2px solid var(--white-color-01) ;
}
 }


`;