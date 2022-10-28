import styled from "styled-components";

export const FooterPage = styled.footer`

.footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 1.5rem;



    .icons {
      display: flex;
      padding: 0 10px;
      margin: 25px 0;
      width: 100%;
      gap: 1rem;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .icon {
       /* margin: 0 8px; */
       cursor: pointer;
       border: 1px inset var(--dark-orange);
       border-radius: 4px;
       padding: .5rem;
      font-size: 1.2rem;
      color:var(--icon-color);
      transition: var(--transition);

      //? footer icons transition effect   */
    }
    span{

        &:hover {
    
          .icon{
              transform: scale(1.1);
              color: var(--icon-color-1);
              border: 1px inset var(--white-color-01);
              font-size: 1.25rem;


    
          }
        }
    }
    }
  }





   .tradeMark {
    font-size: 15px;
    width: 100%;
    color: var(--tradeMark-color);
    text-align: center;
    padding: 0 2rem;
    font-weight: bold;
  }

  .developer{
    display: flex;
    align-items: flex-start;
    width: 100%;
    justify-content: flex-start;
    padding-left: 1rem;
    margin-bottom: 1rem;
color: var(--dark-orange);

span{
  small{
    transition: var(--transition);
    font-weight: bold;

  }
  &:hover{
    small{
      transition: var(--transition);
      cursor: pointer;
      filter: brightness(2);
      
    }
  }

}

  }

`;