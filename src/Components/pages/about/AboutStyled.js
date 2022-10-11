import styled from "styled-components";

export const AboutPage = styled.section`
margin-top: 4rem;
display: flex;
position: relative;
align-items: center;
justify-content: center;

/* h2{
    color: var(--dark-orange);

} */


/* .clip{
position: absolute;
top: 0;
width: 85%;
height: 8rem;
border-radius: 2rem;
display: flex;
padding-top: 2rem;
align-items: flex-start;
justify-content: center;
background-color: var(--navy-blue-bg);
background: linear-gradient( to top, var(--dark-orange), var(--dark-blue-bg), var(--light-blue-bg), var(--dark-blue-bg));
/* background:var(--linear-g02); 

clip-path: polygon(0 0, 100% 0, 100% 61%, 0 84%);

@media screen and (max-width:40rem){
    width: 95%;


    
}




}*/

.aboutTextContainer{
    padding-top: 3rem;

    @media screen and (max-width:40rem){
        padding-top: 5rem;
        
    
        
    }
    


.left-item{
    display: grid;
grid-template-columns: repeat( 3, 1fr);
gap: 2rem;

@media screen and (max-width:57rem){
    grid-template-columns: repeat( 2, 1fr);

  }


@media screen and (max-width:40rem){
    grid-template-columns:  1fr;


    
}

.item{
    @media screen and (max-width:57rem){
grid-column :span 2 ;
      }
    
}



}

.aboutImageAndText{
    display: grid;
grid-template-columns: repeat( 2, 1fr);
padding-top: 3rem;
grid-column-gap: 2rem;
grid-row-gap: 4rem;

@media screen and (max-width:40rem){
    grid-template-columns:  1fr;

    
}


.text{
    box-shadow: var(--box-shadow05);
    position: relative;
    padding: 3.5rem .5rem 1.5rem;
    border-radius: 1rem;

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






`;