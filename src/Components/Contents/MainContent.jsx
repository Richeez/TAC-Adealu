import { About, Contact, Events, Explore, Home, Subtext } from "../pages";
import { ReactComponent as MenuBar } from "../svgs/menu.svg";
import { ReactComponent as Close } from "../svgs/close.svg";
import { MainContainer } from "./mainContentStyled";
import { Route, Routes } from "react-router-dom";

const MainContent = ({
  toggleMenu,
  menu,
  home,
  about,
  events,
  contact,
  notRoutable,
  toggleNotRoutable,
  view,
  pop,
  popUp,
}) => {
  return (
    <>
      <MainContainer>
        <div ref={view} className="pop-up-container">
          <div ref={pop} className="pop-up">
            <div className="close__container">
              <div onClick={popUp} className="close__pop-up"></div>
            </div>
            <h2>Title</h2>
            <p>Content</p>
          </div>
        </div>
        {notRoutable ? (
          <>
            <div onClick={toggleMenu} className="MenuBar">
              {menu ? (
                <Close className="menu active" />
              ) : (
                <MenuBar className="menu active" />
              )}
            </div>
            <Home
              notRoutable={notRoutable}
              toggleNotRoutable={toggleNotRoutable}
              home={home}
              popUp={popUp}
            />
            <Subtext />
            <About about={about} />
            <Events events={events} />
            <Contact contact={contact} />
          </>
        ) : (
          <Routes>
            <Route path="/">
              <Route
                index
                element={<Explore toggleNotRoutable={toggleNotRoutable} />}
              />
            </Route>
          </Routes>
        )}
      </MainContainer>
    </>
  );
};

export default MainContent;
