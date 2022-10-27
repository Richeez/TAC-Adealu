import styled from "styled-components";

export const ContactPage = styled.section`
margin-top: 4rem;
display: flex;
position: relative;
align-items: center;
font-family: var(--font-family);
justify-content: center;
margin-bottom: 2rem;



 .clip{

 @media screen and (max-width:40rem){
  width: 100% ;


    
 }




}
.contact-container {
    width: 100%;
    padding-top: 4.5rem;

    .contact-Text {
      display: flex;
      flex-direction: column;
      text-align: center;

      p {
       font-size: inherit;
       padding: 1rem 0;

       @media screen and (max-width:40rem){
        font-size: 1rem;
        padding-top: 3rem;




    
}

     }
    }

    .details {
      display: grid;
      grid-template-columns: repeat(2, minmax(250px, 1fr));
      padding-top: 2rem;
      gap: 2rem;
      width: 90%;
      margin: 2rem auto;
      border-radius: 1rem;
      background:var(--linear-g04);

      @media screen and (max-width:40rem){
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        width: 100%;
        margin: 0;




    
}
      @media screen and (max-width: 57rem){
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        width: 100%;



    
}

    }
  }


  .names-display-format {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1.3rem;
    gap: 1.3rem;


    @media screen and (max-width:40rem){
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      width: 100%;
      padding: 0;
      gap: 1.3rem;
      flex-wrap: wrap;

  



  
}

  }
  
  input {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: .5rem;
    outline: none;
    border: none;
    letter-spacing: 2px;
    box-shadow: inset 0 0 0 , 1px 2px 2px var(--dark-orange) ;
    color: var(--white-color-01);
    background-color: var(--navy-blue-bg);

    &::placeholder{
      font-family: var(--font-family);

    }

  }

  textarea {
    resize: none;
    padding: 1rem;
    border: none;
    font-size: 1rem;
    border-radius: .5rem;
    letter-spacing: 2px;
    box-shadow: inset 1px 2px 2px var(--dark-orange);
    outline: none;
    color: var(--white-color-01);
    background-color: var(--navy-blue-bg);

    &::placeholder{
      font-family: var(--font-family);

    }


  }

  .email-Comment {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 0 1.3rem;
      font-family: var(--font-family);

      @media screen and (max-width:40rem){
        width: 100%;
        padding: 0;
        gap: 1.3rem;
    
  
  
  
    
  }
  

      


  }

  .email-Comment > * {
    width: 100%;
  }

  @media screen and (max-width:40rem){
    width: 100%;
    padding: 0;





}


 
`;
