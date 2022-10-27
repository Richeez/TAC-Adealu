import styled from "styled-components";

export const EventPage = styled.section`
margin-top: 4rem;
display: flex;
position: relative;
align-items: center;
justify-content: center;



// .clip{
// position: absolute;
// top: 0;
// width: 85%;
// height: 8rem;
// border-radius: 2rem;
// display: flex;
// padding-top: 2rem;
// align-items: flex-start;
// justify-content: center;
// background-color: var(--navy-blue-bg);
// background: linear-gradient( to top, var(--dark-orange), var(--dark-blue-bg), var(--light-blue-bg), var(--dark-blue-bg));
// clip-path: polygon(0 0, 100% 0, 100% 61%, 0 84%);

// @media screen and (max-width:40rem){
//     width: 95%;


    
// }




// }

  .image-cont{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding-top: 3rem;
    overflow: hidden;

    h2{
        color: var(--white-color-01);
        font-size: 1.3rem;
        text-shadow: 1px 2px 2px var(--grey-5);

        
    
    }
    
    
    @media screen and (max-width: 40rem){
        padding-top: 7rem;
        
    
        
    }

    .item{

        border-radius: 1rem;
        overflow: hidden;
        position: relative;

        &:nth-of-type(1){
            grid-row: span 2;

        }
        
        @media screen and (max-width:40rem){
            grid-row: span 1;

            &:nth-of-type(5){
            grid-area: 1;

        
    
        
    }

    }

    .overlay{
        position: absolute;
        bottom: -100px;
        width: 100%;
        height: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transition: var(--transition);
        background:var(--linear-g08);

    }

    &:hover{

        .overlay{
            top: 0;
            height: 100%;
            
        }

    }


}

}



`;