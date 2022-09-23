import NavLink from './activeLink';
import { useState } from 'react'
import { Container, Desktop } from "./styles";


export function MenuResponsive() {
  const [classOn, setClassOn] = useState(false);

  return (
    <>
      <Container>
        <div className="mainContainer">
          <div className="logoHeader">
            Logo
          </div>

          <div className="mainMenu">
            <div className={classOn ? "menuSectionOn" : "menuSection"} onClick={() => setClassOn(!classOn)}>
              <div className="menuToggle">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
              </div>
              <Desktop>
                <nav className="listItems">
                  <ul className="menu">
                    <li className="item">
                      <NavLink title="Home" path="/" />
                    </li>
                    <li className="item">Services
                      <ul className="submenu">
                        <li className="subItem">
                          <div className="textMenu">
                            <NavLink title="Second" path="/second" />
                          </div>
                        </li>

                      </ul>
                    </li>
                    <li className="item">Products
                      <ul className="submenu">
                        <li className="subItem">
                          <div className="textMenu">
                            <NavLink title="Second" path="/second" />
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </Desktop>

              <nav className="listItemsMobile">
                <ul className="menu">
                  <li className="item">
                    <NavLink title="Home" path="/second" />
                  </li>
                  <li className="subItem">
                    <NavLink title="Home" path="/second" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}