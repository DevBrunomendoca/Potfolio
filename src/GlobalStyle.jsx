import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Archivo', sans-serif;
}

:root {
  --primary-color: #111111;
  --second-color: #14abc6;
  --third-color: #fff;
}

html {
  font-size: 62.5%;
}

body{
  background-color: #1d1d1d;
  height: 100vh;
}
`