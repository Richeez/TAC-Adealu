import Globalstyles from './Styles/GlobalStyles';
import { Footer, MainContent, NavBar } from './Components';
import {useState, useRef} from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Theme/theme';



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const home = useRef(null);
  const about = useRef(null);
  const events = useRef(null);
  const contact = useRef(null);
  

  const [currentTheme, setCurrentTheme] = useState( JSON.parse(localStorage.getItem('currentMode')) ?? 'light');

  const menuBar = () => {

    setMenuOpen(prev => !prev)
    
  }

  const scrollToPage = (page) => {
window.scrollTo({
  top: page.current.offsetTop,
});    
  };

  

  function switchMode() {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')
    
  }
  
  return (
   <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
    {localStorage.setItem('currentMode', JSON.stringify(currentTheme))}

<>
<Globalstyles/>
<div className='header'>
<div className='inner-header'>

<NavBar
 scrollToPage={scrollToPage} 
 toggleMenu={menuBar} 
 toggleTheme={switchMode}
themeState={currentTheme}
 menu={menuOpen} home={home} 
 about={about} 
 events={events} 
 contact={contact}/>


<MainContent 
toggleMenu={menuBar} 
menu={menuOpen}
home={home} 
about={about} 
events={events} 
contact={contact}/>
</div>
</div>

<Footer/> 
</>
</ThemeProvider>
  );
}

export default App;
