import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const NavLinkContainer = styled.li<NavLinkProps>`
  

`;

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["background_header"]};
  
  @media (max-width: 999px) {
    .menuDesktop {
      display: none;
    }
  }

  @media (min-width: 999px) {
    .menuMobile {
      display: none;
    }
  }

  .contactMobile {
    display: none;
  }
}

.mainContainer {
  max-width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    padding: 0 1rem 0 0.75rem;
  }
}
 
.logoHeader {
  display: flex;
  flex: 0;
  align-items: center;
  justify-content: center;
  padding: 0 4rem;
  cursor: pointer;
  
  @media (max-width: 400px) {
    width: 8rem;
  }
}

  .mainMenu {
    flex: 1;
  }
`

export const Desktop = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 2rem 0 0;


  @media (max-width: 999px) {
    display: none;
  }

  
  ul {
    display: flex;
    padding-left: 0rem;
    text-align: left;
    flex-direction: row;
    
    gap: 1.15rem;

    @media (min-width:999px) and (max-width:1250px) {
      gap: 0.5rem;
    }

    li {
      padding: 0 0rem 0 0rem;
      list-style: none;
      text-align: center;
      width: auto;
      height: auto;
      display: inline-block;
      position: relative;
      height: 1rem;
      line-height: 0.5rem;
      font-size: 1.5rem;
      font-weight: bolder;
      

      &:hover {
        /* color: "red"; */
      }

      @media (max-width: 1200px) {
        font-size: 1.25rem;
      }


    }
  }

  .menu {
    
    .item {
      margin: 0 0px;
      padding: 2.82rem 0.33rem;
    }

    .item:hover {
      background-color: ${({ theme }) => theme.colors["background_menu"]};
      /* color: ${({ theme }) => theme.colors["textHighlight"]}; */

      .submenu {
        display: block;
      }
    }

  }

  .submenu {
    font-weight: 300;
    text-transform: none;
    display: none;
    position: absolute;
    width: 16rem;
    background-color: ${({ theme }) => theme.colors["background_menu"]};
    padding-top: 15px;
    padding-bottom: 10px;
    margin-top: 2.3rem;
    margin-left: -0.33rem;

    .subItem {
      line-height: 25px;
      padding: 10px 20px 10px 20px;
      margin-bottom: 25px;
      font-size: 1.25rem;
      font-weight: 600;
      margin-right: 0px;

      &:hover {
        /* color: "red"; */
      }

      @media (max-width: 1200px) {
        font-size: 1.15rem;
      }
    }
  }
}
`

export const Mobile = styled.div`

@media (max-width: 999px) {

.mainMenu {
  height: 5rem;
}

.menuMobile {
  display: flex;
  flex-direction: column;
  margin: 0 0rem 0 0;

  ul {
    flex-direction: column;
    line-height: 0px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    display: flex;
    padding-left: 0rem;
    text-align: left;

    height: auto;
    gap: 3.5rem;

    @media (max-width: 500px) {
      margin-top: 1rem;
    }

    li {
      height: 0.5rem;

      @media (max-width: 500px) {
        height: 0rem;
      }

    }
  }
}

@media (max-width: 999px) {
  .mainMenu {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    justify-content: right
  }


  .menuSection {
    align-items: center;
    .menuMobile {
      display: none;
    }
  }

  .one,
  .two,
  .three {
    background-color: blue;
    height: 5px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;

    @media (max-width: 450px) {
      height: 3px;
      width: 100%;
      margin: 6.5px 0px 0px 15px;
      padding: 2px 0px 2px 0px;

    }
  }

  .menuToggle {
    width: 40px;
    height: 30px;
    margin-right: 20px;
  }

  /*Fullscreen*/
  .menuSectionOn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    // backdrop-filter: blur(20px);
    opacity: 0.95;
    z-index: 9;
    /*camada acima, evitar o scrool dos itens a baixo*/
    display: flex;
    justify-content: center;
    // align-items: center;
    padding-top: 6rem;
  }

  .menuSectionOn nav {
    display: block;
  }


  .menuSectionOn .menuToggle {
    position: absolute;
    right: 25px;
    top: 25px;
  }


  .menuSectionOn .menuToggle .one {
    transform: rotate(45deg) translate(7px, 7px);
    background-color: rgb(255, 255, 255);
  }

  .menuSectionOn .menuToggle .two {
    opacity: 0;
  }

  .menuSectionOn .menuToggle .three {
    transform: rotate(-45deg) translate(8px, -9px);
    background-color: rgb(255, 255, 255);
  }
}

@media (max-width: 320px) {
  #form h3 {
    font-size: 2rem;
  }
}
}
`