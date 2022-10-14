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



.MenuBar{
    display: none;
    width: 3.1rem;
    position: sticky;
    top: 85%;
    left: 100%;
    z-index: 10;
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
      z-index: 10;


    }
    @media screen and (max-width:40rem){
      display: flex;
      width: 3.5rem;
      height: 3.5rem;
      z-index: 10;



    }

    .menu{
      fill: white;
      width: 100%;
      height: 3rem;
      pointer-events: none;
      transform: translateX(100%);
      opacity: 0;
      transition: var(--transition);

    }

}



`;

