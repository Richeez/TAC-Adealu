import Globalstyles from './Styles/GlobalStyles';
import { Footer, MainContent, NavBar } from './Components';
import { useState, useRef, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './Theme/theme';
import Aos from 'aos';
import 'aos/dist/aos.css'


// Fade animations:

// fade
// fade-up
// fade-down
// fade-left
// fade-right
// fade-up-right
// fade-up-left
// fade-down-right
// fade-down-left
// Flip animations:

// flip-up
// flip-down
// flip-left
// flip-right
// Slide animations:

// slide-up
// slide-down
// slide-left
// slide-right
// Zoom animations:

// zoom-in
// zoom-in-up
// zoom-in-down
// zoom-in-left
// zoom-in-right
// zoom-out
// zoom-out-up
// zoom-out-down
// zoom-out-left
// zoom-out-right
// Anchor placement:
// top-bottom
// top-center
// top-top
// center-bottom
// center-center
// center-top
// bottom-bottom
// bottom-center
// bottom-top



function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const home = useRef(null);
  const about = useRef(null);
  const events = useRef(null);
  const contact = useRef(null);
  const view = useRef(null);
  const pop = useRef(null);

  const [notRoutable, setNotRoutable] = useState(true);

  const [currentTheme, setCurrentTheme] = useState(JSON.parse(localStorage.getItem('currentMode')) ?? 'light');

  const popUp = () => {
    view.current.classList.toggle('view')
    pop.current.classList.toggle('pop')
  }
  const menuBar = () => {

    setMenuOpen(prev => !prev)

  }

  const scrollToPage = (page) => {
    window.scrollTo({
      top: page.current.offsetTop,
    });
  };

  const toggleNotRoutable = () => {
    setNotRoutable((prev) => !prev);
  };




  function switchMode() {
    currentTheme === 'light' ? setCurrentTheme('dark') : setCurrentTheme('light')

  }

  useEffect(() => {
    Aos.init({ duration: 2000 })

  }, [])


  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      {localStorage.setItem('currentMode', JSON.stringify(currentTheme))}


      <main className='App'>
        <Globalstyles />
        <div className='header'>
          <div className='inner-header'>

            <NavBar
              notRoutable={notRoutable}
              scrollToPage={scrollToPage}
              toggleMenu={menuBar}
              toggleTheme={switchMode}
              themeState={currentTheme}
              menu={menuOpen}
              home={home}
              about={about}
              events={events}
              contact={contact} />


            <MainContent
              notRoutable={notRoutable}
              toggleNotRoutable={toggleNotRoutable}
              toggleMenu={menuBar}
              menu={menuOpen}
              home={home}
              popUp={popUp}
              view={view}
              pop={pop}
              about={about}
              events={events}
              contact={contact} />
          </div>
        </div>

        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
