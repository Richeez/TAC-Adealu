import styled from "styled-components";

export const MainContainer = styled.main`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
position: relative;
min-height: 100vh;
background-color: var(--dark-blue-bg);
background: var(--linear-g01);
transition: var(--transition);

.pop-up-container{
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 2rem;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  background-color: var(--transparent-color-02);
  pointer-events: none;
  opacity: 0;

  @media screen and (max-width:40rem){
    padding: 2rem 1rem;

  }

  .pop-up{
    width: 80%;
    height: 30rem;
    border: 5px solid var(--dark-orange);
    background-color: var(--cornsilk-color);
    padding: 1rem;
    border-radius: 2rem;
    color: var(--def-text-color);
    transition: var(--transition);
    transform: scale(0);
    position: relative;

    h2{
      text-align: center;
      text-transform: uppercase;

    }

    p{
      color: var(--def-text-color);

    }
    .close__container{
      position: absolute;
      top: 10px;
      right: 3%;
        width: 50px;
        height: 50px;


      .close__pop-up{
        position: relaive;
        width: 100% ;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;

        &::before {
        content: "";
        width: 2rem;
        height: 0.2rem;
        position: absolute;
        transform: rotate(45deg) translate(2px);
        background-color: var(--def-text-color);
      }
      &::after {
        content: "";
        width: 2rem;
        height: 0.2rem;
        position: absolute;
        transform: rotate(125deg);
        background-color: var(--def-text-color);
      }
      }
      @media screen and (max-width:40rem){
        top: 10px;
      right: 5%;

      }

    }
    @media screen and (max-width:40rem){
      width: 100% ;
    }

  }
}

.view{
  pointer-events: all;
  opacity: 1;
  transition: var(--transition);


  .pop{
    transform: scale(1);
    transition: var(--transition);

  
  }

}



.MenuBar{
    display: none;
    width: 3.1rem;
    position: sticky;
    top: 75%;
    left: 100%;
    z-index: 5;
    overflow: hidden;
    transform: translateX(-50%);
    background-color: var(--dark-blue-bg);
    border-radius: .5rem;
    box-shadow: 2px 2px 5px var(--link-indicator);
    transition: var(--transition);
    cursor: pointer;
    padding: .5rem;
    align-items: center;
    justify-content: center;

    :active{
        box-shadow: none;
        transition: var(--transition);

    }
    
    @media screen and (max-width:57rem){
      display: flex;
      width: 4rem;
      height: 4rem;


    }

    @media screen and (max-width:40rem){
      display: flex;
      width: 3.5rem;
      height: 3.5rem;



    }

    .menu{
      fill: var(--white-color-01);
      width: 100%;
      height: 3rem;
      pointer-events: none;
      transform: translateX(100%);
      opacity: 0;
      transition: var(--transition);

    }

}





`;

