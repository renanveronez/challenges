import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
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

      textMenuBarActive: string,
      textMenuBarOff: string,
      textMenuHover: string,
      text: string,
      textHighlight: string,
      textLight: string,
    },

    fonts: {
      title: string,
      regular: string,
    }
  }
}