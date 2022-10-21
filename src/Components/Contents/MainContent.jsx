import React from 'react'
import { About, Contact, Events, Home, Subtext } from '../pages'
import {ReactComponent as MenuBar} from '../svgs/menu.svg'
import {ReactComponent as Close} from '../svgs/close.svg'
import { MainContainer } from './mainContentStyled'
// import { StyledContainer } from '../pages/explore/exploreStyled'

const MainContent = ({toggleMenu, menu, home, about, events, contact}) => {
  return (
<MainContainer>
  <div onClick={toggleMenu} className="MenuBar">
    {menu ? <Close className='menu active'/> : <MenuBar className='menu active'/>}
  </div>
     <Home home={home}/>
     <Subtext/>
     <About 
     about={about}      
     />
     <Events events={events} />
     <Contact contact={contact}/>
    {/* <StyledContainer/> */}
 </MainContainer>
  )
}

export default MainContent