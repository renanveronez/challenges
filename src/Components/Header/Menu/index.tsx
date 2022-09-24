import NavLink from './activeLink';
import { useState } from 'react'
import { Container, Desktop, Mobile } from "./styles";


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

            <Desktop>
              <ul className="menu">
                <NavLink path="/">
                  <li className="item">
                    Home
                  </li>
                </NavLink>
                <li className="item">Codes
                  <ul className="submenu">
                    <NavLink path="/second" >
                      <li className="subItem">
                        <div className="textMenu">
                          Second
                        </div>
                      </li>
                    </NavLink>
                  </ul>
                </li>
                <li className="item">Test
                  <ul className="submenu">
                    <NavLink path="/tests" >
                      <li className="subItem">
                        <div className="textMenu">
                          Test
                        </div>
                      </li>
                    </NavLink>
                  </ul>
                </li>
              </ul>
            </Desktop>

            <Mobile>
              <div className="mainMenu">
                <div className={classOn ? "menuSectionOn" : "menuSection"} onClick={() => setClassOn(!classOn)}>
                  <div className="menuToggle">
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                  </div>

                  <nav className="menuMobile">
                    <ul className="menu">
                      <NavLink path="/second">
                        <li className="item">
                          Home
                        </li>
                      </NavLink>
                      <NavLink path="/second" >
                        <li className="subItem">
                          Second
                        </li>
                      </NavLink>
                    </ul>
                  </nav>
                </div>
              </div>
            </Mobile>

          </div>
        </div>

      </Container >
    </>
  )
}