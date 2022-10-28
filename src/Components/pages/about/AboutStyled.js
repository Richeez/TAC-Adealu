import styled from "styled-components";

export const AboutPage = styled.section`
margin-top: 4rem;
display: flex;
position: relative;
align-items: center;
justify-content: center;


.aboutTextContainer{
    padding-top: 3rem;
    overflow: hidden;



    @media screen and (max-width:40rem){
        padding-top: 5rem;

        
    
        
    }
    

.about-contents{
    display: grid;
    grid-template-columns: repeat( 3, 1fr);
    gap: 2rem;
    width: 100%;
    
    @media screen and (max-width:57rem){
        grid-template-columns: repeat( 2, 1fr);
    
      }

      @media screen and (max-width:40rem){
          grid-template-columns:  1fr;
        }
      
    .left-item{
    
    .item{


h2{
    text-transform: capitalize;
}

        
    }
    
    
    @media screen and (max-width:57rem){
    grid-column :span 2 ;
          }

    
    
        
    }
    
    
    
    
    }

    
    .right-item{
        display: grid;
        overflow: hidden;
    grid-template-columns: repeat( auto-fit, minmax(250px, 1fr ));
    padding-top: 3rem;
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;
    width: 100%;
    
    @media screen and (max-width:40rem){
        grid-template-columns:  1fr;
    
        
    }
    
    
    .text{
        box-shadow: var(--box-shadow05);
        position: relative;
        padding: 3.5rem .5rem 1.5rem;
        border-radius: 1rem;
        // background-color: aliceblue;
        max-width: 100%;
        // width: 250px;
    
    
    
    
        &:hover{
            transform: translateY(-7px);
            box-shadow: var(--box-shadow01);
            transition: var(--transition);
    
    
            .imageContainer{
                border: 2px solid var(--dark-orange);
                transition: var(--transition);
        
            
             }
        
    
        }
    
        p{
            width: 100%;
            font-size: 1rem;
            
        }
    
        .imageContainer{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid var(--grey-2);
            background-color: var(--dark-blue-bg);
            overflow: hidden;
            position: absolute;
            top: -10%;
            left: 50%;
            transform: translateX(-50%);
    
            img{
                width: 100%;
                height: 100%;
            }
    
        }
    
    
    }
    
    .text:nth-of-type(2){
     box-shadow: var(--box-shadow03);
     transition: var(--transition);
    
     :hover{
        box-shadow: var(--box-shadow04);
        transition: var(--transition);
    
    
        .imageContainer{
            border: 2px solid var(--dark-orange);
            transition: var(--transition);
    
        
         }
    
     }
    
    
    }
    .text:nth-of-type(4){
     box-shadow: var(--box-shadow03);
     transition: var(--transition);
    
     :hover{
        box-shadow: var(--box-shadow04);
        transition: var(--transition);
    
        .imageContainer{
            border: 2px solid var(--dark-orange);
            transition: var(--transition);
    
        
         }
    
    
    
     }
    
    
    
    }
    
    
    }

}



}






`;