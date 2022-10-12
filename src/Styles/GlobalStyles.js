import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`


body{
  background-color: var(--dark-blue-bg);
  background: var(--linear-g01);
   font-size: var(--def-font-size);
    font-family: var(--font-family);
    color:var(--def-text-color);
    transition: var(--transition);
}
.show{
  color: var(--show);
}
.dim{
  color: var(--grey-2);
}

.header{
  background:var(--darker-orange);

}
.inner-header{
  background:var(--transparent-color-01);
}

:root{
  --navy-blue-bg:${({theme})=> theme.colors.navyBlueBG};
  --icon-color:${({theme})=> theme.font.iconColor};
  --icon-color-1:${({theme})=> theme.font.iconColor1};
  --link-indicator:${({theme})=> theme.colors.linkIndicator};
  --darker-orange:${({theme})=> theme.colors.darkerOrange};
  --show:${({theme})=> theme.colors.show};
  --scroll-bar:${({theme})=> theme.colors.scrollBar};
  --dark-blue-bg:${({theme})=> theme.colors.darkBlueBG};
  --dark-blue:${({theme})=> theme.colors.darkBlue};
  --light-blue-bg:${({theme})=> theme.colors.lightBlueBG};
  --ash-color:${({theme})=> theme.colors.ashColor};
  --def-text-color:${({theme})=> theme.font.defTextColor};
  --def-font-size:${({theme})=> theme.font.defFontSize};
  --font-family: ${({theme})=> theme.font.fontFamily};
  --linear-g01:${({theme})=> theme.colors.LG01};
  --linear-g02:${({theme})=> theme.colors.LG02};
  --linear-g03:${({theme})=> theme.colors.LG03};
  --linear-g04:${({theme})=> theme.colors.LG04};
  --linear-g05:${({theme})=> theme.colors.LG05};
  --linear-g06:${({theme})=> theme.colors.LG06};
  --linear-g07:${({theme})=> theme.colors.LG07};
  --linear-g08:${({theme})=> theme.colors.LG08};
  --linear-g09:${({theme})=> theme.colors.LG09};
  --orange-bg:${({theme})=> theme.colors.orangeBG};
  --orange-color:${({theme})=> theme.font.orangeColor};
  --dark-orange:${({theme})=> theme.colors.darkOrange};
  --light-orange:${({theme})=> theme.colors.lightOrange};
  --light-orange01:${({theme})=> theme.colors.lightOrange01};
  --transparent-color-01:${({theme})=> theme.colors.transparentColor01};
  --transparent-color-02:${({theme})=> theme.colors.transparentColor02};
  --white-color-01:${({theme})=> theme.colors.whiteColor01};
  --white-color-02:${({theme})=> theme.colors.whiteColor02};
  --white-color-1:${({theme})=> theme.colors.whiteColor1};
  --white-color-2:${({theme})=> theme.colors.whiteColor2};
  --cornsilk-color:${({theme})=> theme.colors.cornsilkColor};
  --grey-5:${({theme})=> theme.colors.grey5};
  --grey-2:${({theme})=> theme.colors.grey2};
  --grey-1:${({theme})=> theme.colors.grey1};
  --grey-3:${({theme})=> theme.colors.grey3};
  --transition:${({theme})=> theme.effects.transition};
  --box-shadow01:${({theme})=> theme.colors.boxShadow01};
  --box-shadow03:${({theme})=> theme.colors.boxShadow03};
  --box-shadow04:${({theme})=> theme.colors.boxShadow04};
  --box-shadow05:${({theme})=> theme.colors.boxShadow05};
}


*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    line-height: 1.3;
    scroll-padding-top: 10rem;



}

p{
  width: 100%;
  text-shadow: 1px 2px 2px var(--grey-5);

}

.clip{
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
  background: var(--linear-g07);
  clip-path: polygon(0 0, 100% 0, 100% 61%, 0 84%);
  
  @media screen and (max-width:40rem){
      width: 95%;
  
  
      
  }

  
  
  
  
  
  }
  

section{
    width: 100%;
    min-height: 50vh;
    padding: 3rem;

    @media screen and (max-width: 40rem){
      padding: 1rem ;
}

@media screen and (max-width: 57rem){
  padding: 1rem ;
        
    
        
    }


}


.absolute{
    position: absolute;
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
  background:var(--linear-g02);

}

::-webkit-scrollbar-track {
  -webkit-margin-before: 6rem;
  margin-block-start: 6rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: var(--white-color-01);
  box-shadow: inset 0 0 6px var(--transparent-color-02);
  background:var(--linear-g03);
  -webkit-box-shadow: inset 0 0 6px var(--transparent-color-02);
}

//TODO====== INDEPENDENT COMPONENTS=======//


.span-2{
    grid-column: span 2;
    padding-bottom: 2rem;

    @media screen and (max-width:40rem){

        grid-column: span 1;

    }
    
}


.active-notation {
    display: block;

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