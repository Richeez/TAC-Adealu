import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Label, Slider, Switch, SwitcherCont } from '../switch/switchStyled'
import { Header, Nav, UL, NavCont, Brand, Logo} from './navBarStyled'


function NavBar({scrollToPage, toggleMenu, menu, toggleTheme, themeState, home, about, events, contact}) {
  return (
    <Header>
      <Brand>
      <Logo src='./images/logo-2.png' alt='brand logo'/>
      </Brand>
        <NavCont className={`${menu ? 'active' : ''}`} >
        <Nav>
            <UL>
                <li  onClick={()=>scrollToPage(home)} > <span>Home</span> </li>
                <li  onClick={()=>scrollToPage(about)} ><span>About</span> </li>
                <li> <span> Media <FontAwesomeIcon icon={['fa','caret-down']}/></span></li>
                <li  onClick={()=>scrollToPage(events)} ><span>Events</span> </li>
                {/* <li><a href='#donate'>Give</a></li> */}
                <li  onClick={()=>scrollToPage(contact)} ><span>Contact Us</span> </li>
            </UL>
        </Nav>
        </NavCont>
        <SwitcherCont>
        <p className={`${themeState === 'light' ? 'show': 'dim'}`}>Light</p>
        <Label>
          <Switch onClick={toggleTheme} type='checkbox'/>
          <Slider/>
        </Label>
          <p className={`${themeState === 'dark' ? 'show': 'dim'}`}>Dark</p>

        </SwitcherCont>
    </Header>
  )
}

export default NavBar