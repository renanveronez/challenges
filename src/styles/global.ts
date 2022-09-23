import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.colors["background"]};
    color: ${({ theme }) => theme.colors["text_primary"]};
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular}, sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }


  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  /* ::-webkit-scrollbar {
    width: 1rem;
    color: ${({ theme }) => theme.colors["components_background"]} 
  } */

  h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors["text_secondary"]};

    span{
      color: ${({ theme }) => theme.colors["primary"]};
    }
  }

  ul {
    list-style-type: none;
  }
 
`