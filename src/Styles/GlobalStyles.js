import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
body{

  background-color: var(--dark-blue-bg);
  background: var(--linear-g01);
  font-size: var(--def-font-size);
    font-family: var(--font-family);
    color:var(--fallback-text-color);
    transition: var(--transition);
}
.App{
  /* overflow-x: hidden; */
  /* position: relative; */

    /* overflow-y: scroll; */

}
.show{
  color: var(--show);
}
.dim{
  color: var(--grey-2);
}

.header{
  background:var(--darker-orange);
  padding-top: 5rem;

}
.inner-header{
  background:var(--transparent-color-01);
}

:root{
  --navy-blue-bg:${({ theme }) => theme.colors.navyBlueBG};
  --icon-color:${({ theme }) => theme.font.iconColor};
  --icon-color-1:${({ theme }) => theme.font.iconColor1};
  --link-indicator:${({ theme }) => theme.colors.linkIndicator};
  --darker-orange:${({ theme }) => theme.colors.darkerOrange};
  --show:${({ theme }) => theme.colors.show};
  --scroll-bar:${({ theme }) => theme.colors.scrollBar};
  --dark-blue-bg:${({ theme }) => theme.colors.darkBlueBG};
  --dark-blue:${({ theme }) => theme.colors.darkBlue};
  --light-blue-bg:${({ theme }) => theme.colors.lightBlueBG};
  --ash-color:${({ theme }) => theme.colors.ashColor};
  --def-text-color:${({ theme }) => theme.font.defTextColor};
  --fallback-text-color:${({ theme }) => theme.font.fallbackTextColor};
  --def-font-size:${({ theme }) => theme.font.defFontSize};
  --font-family: ${({ theme }) => theme.font.fontFamily};
  --linear-g01:${({ theme }) => theme.colors.LG01};
  --linear-g02:${({ theme }) => theme.colors.LG02};
  --linear-g03:${({ theme }) => theme.colors.LG03};
  --linear-g04:${({ theme }) => theme.colors.LG04};
  --linear-g05:${({ theme }) => theme.colors.LG05};
  --linear-g06:${({ theme }) => theme.colors.LG06};
  --linear-g07:${({ theme }) => theme.colors.LG07};
  --linear-g08:${({ theme }) => theme.colors.LG08};
  --linear-g09:${({ theme }) => theme.colors.LG09};
  --linear-g10:${({ theme }) => theme.colors.LG10};
  --orange-bg:${({ theme }) => theme.colors.orangeBG};
  --orange-color:${({ theme }) => theme.font.orangeColor};
  --dark-orange:${({ theme }) => theme.colors.darkOrange};
  --light-orange:${({ theme }) => theme.colors.lightOrange};
  --light-orange01:${({ theme }) => theme.colors.lightOrange01};
  --transparent-color-01:${({ theme }) => theme.colors.transparentColor01};
  --transparent-color-02:${({ theme }) => theme.colors.transparentColor02};
  --white-color-01:${({ theme }) => theme.colors.whiteColor01};
  --tradeMark-color:${({ theme }) => theme.colors.tradeMarkColor};
  --white-color-02:${({ theme }) => theme.colors.whiteColor02};
  --white-color-1:${({ theme }) => theme.colors.whiteColor1};
  --white-color-2:${({ theme }) => theme.colors.whiteColor2};
  --cornsilk-color:${({ theme }) => theme.colors.cornsilkColor};
  --grey-5:${({ theme }) => theme.colors.grey5};
  --grey-2:${({ theme }) => theme.colors.grey2};
  --grey-1:${({ theme }) => theme.colors.grey1};
  --grey-3:${({ theme }) => theme.colors.grey3};
  --transition:${({ theme }) => theme.effects.transition};
  --box-shadow01:${({ theme }) => theme.colors.boxShadow01};
  --box-shadow03:${({ theme }) => theme.colors.boxShadow03};
  --box-shadow04:${({ theme }) => theme.colors.boxShadow04};
  --box-shadow05:${({ theme }) => theme.colors.boxShadow05};
}


*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    line-height: 1.6;
    scroll-padding-top: 10rem;



}

p{
  width: 100%;
  color: var(--fallback-text-color);
  /* text-shadow: 1px 2px 2px var(--grey-5); */

}

.navigate_to_left{
  font-size: 2rem;
  color: var(--white-color-01);
  position: absolute;
  top: -8%;
  left: 5%;
  border: 2px solid var(--white-color-01);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
}

.clip{
  position: absolute;
  top: 0;
  /* max-width: 100%; */
  width: 85%;
  height: 8rem;
  border-radius: 2rem;
  display: flex;
  padding-top: 2rem;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--navy-blue-bg);
  background: var(--linear-g07);
  clip-path: polygon(0 0, 100% 0, 100% 61%, 0 84%);
  
  @media screen and (max-width:40rem){
      width: 100%;
  
  
      
  }

  
  
  
  
  
  }
  

section{
    width: 100%;
    min-height: 50vh;
    padding: 3rem;

    
    @media screen and (max-width: 57rem){
      padding: 1rem ;
      
      
      
    }
    
    @media screen and (max-width: 40rem){
      padding: 1rem ;
  }

}


.absolute{
    position: absolute;
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;

}

::-webkit-scrollbar-thumb {
  background-color:var(--link-indicator);
  border-radius: 1rem;
  border: 2px inset var(--transparent-color-01);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.2rem;
   background:var(--linear-g10); 

}

::-webkit-scrollbar-track {
  -webkit-margin-before: 6rem;
  margin-block-start: 6rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  /* box-shadow: inset 0 0 6px var(--transparent-color-02); */
  background:var(--linear-g03);
  /* -webkit-box-shadow: inset 0 0 6px var(--transparent-color-02); */
}

//TODO====== INDEPENDENT COMPONENTS=======//


.span-2{
    grid-column: span 2;
    padding-bottom: 2rem;

    @media screen and (max-width:40rem){

        grid-column: span 1;

    }
    
}

.translateX_400{
  opacity: 0;
  transform: translateX(400%);
  transition: var(--transition);
}

.translateX_400:nth-of-type(even){
  opacity: 0;
  transform: translateX(-400%);
}

.translateX_0{
  opacity: 1;
  transform: translateX(0);
}


.active{

  animation: scaleAnim 1s forwards ease-out;

  @keyframes scaleAnim {

    0%{
        transform: translateX(100%);
        opacity: 0;
    }
    
    100%{
        transform: translateX(0);
        opacity: 1;

    }
    
  }
}




`;

export default Globalstyles