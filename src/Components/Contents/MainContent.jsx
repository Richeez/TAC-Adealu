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
}) => {
  return (
    <>
      <MainContainer>
        <div className="pop-up-container">
          <div className="pop-up">
            {/* <h2>pop up</h2>
            <p>Hello World</p> */}
          </div>
        </div>
        <div onClick={toggleMenu} className="MenuBar">
          {menu ? (
            <Close className="menu active" />
          ) : (
            <MenuBar className="menu active" />
          )}
        </div>
        {notRoutable ? (
          <>
            <Home
              notRoutable={notRoutable}
              toggleNotRoutable={toggleNotRoutable}
              home={home}
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
