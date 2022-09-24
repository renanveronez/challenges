import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {

      background_header: string,
      background_body: string,
      textMenuBarActive: string,
      textMenuBarOff: string,
      textMenuHover: string,

      background_menu: string,

      text: string,
      textHighlight: string,
      textLight: string,

      base_background: string,
      primary: string,
      feature: string,
      bug: string,
      deploy: string,
      infra: string,
      text_primary: string,
      text_secondary: string,
      text_tertiary: string,
      placeholder: string,
      background: string,
      components_background: string,
      border: string,
      switch: string


    },

    fonts: {
      title: string,
      regular: string,
    }
  }
}