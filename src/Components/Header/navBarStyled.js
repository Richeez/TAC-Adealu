import styled from "styled-components";

export const Header = styled.header`
display: flex;
width: 100%;
height: 6rem;
justify-content: center;
align-items: center;
padding: 2rem;
max-width: 100%;
z-index: 99;
position: sticky;
top: 0;
backdrop-filter: blur(.2rem);
background:var(--linear-g02);

@media screen and (max-width:40rem){
  padding: 1rem;
}





`;
export const Logo = styled.img`
width: 100%;
height: 100%;
object-fit: contain;

`;

export const Brand = styled.div`
width: 100px;
height: 90px;
position: relative;
margin-right: auto;


@media screen and (max-width:40rem){
margin-right: auto;
}


`;
export const NavCont = styled.div`
display: flex;
width: 100%;
max-width: 100%;
align-items: center;
justify-content: center;
gap: 5rem;
padding-right: 2rem;

@media screen and (max-width:57rem){
  display: none;
  width: 50%;
  top: 68%;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  height: 60vh;
  right: 0;
  transform: translateX(100%);
      opacity: 0;
      transition: var(--transition);
    background: var(--linear-g01);



}
@media screen and (max-width:40rem){
  display: none;
  flex-direction: column;
  align-items: center;
border-radius: 1rem;
padding-top: 2rem;
border-top-right-radius: 0;
  height: 60vh;
  position: absolute;
  transform: translateX(100%);
      opacity: 0;
      transition: var(--transition);

  right: 0;
    background: var(--linear-g09);


}


`;

export const Nav = styled.nav`
display: flex;
width: 100%;
height: fit-content;


`;
export const UL = styled.ul`
display: flex;
align-items: flex-end;
justify-content: space-between;
gap: 1.3rem;
width: 70%;
margin-left: auto;
height: fit-content;
list-style: none;

@media screen and (max-width:57rem){
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 100%;

}
@media screen and (max-width:40rem){
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;





}


li{
:hover{
    span{

      color: var(--link-indicator);

    }
  }


display: block;
position: relative;
padding: 0.4rem .5rem;
z-index: 2;

 &:hover::after,&:focus::after {
  width: 100%;
  color: var(--link-indicator);
  opacity: 1;
  transition: var(--transition);
  
}

&::after, &:focus::after {
  content: "";
  position: absolute;
  width: 0;
  opacity: 0;
  transition: var(--transition);
  background-color: var(--link-indicator);
  height: 0.15rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: .4rem;

}


}

& > *{
text-decoration: none;
a{
  text-decoration: none;
color: inherit;

}
color: inherit;

  :hover{
    cursor: pointer;

  }  

}

@media screen and (max-width:40rem){
  
}



`;