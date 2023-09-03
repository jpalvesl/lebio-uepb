import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "cv11", "salt", "ss01", "ss03", "cv01", "cv02", "cv03", "cv04", "cv05", "cv06", "cv09", "cv10";
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;