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
  @media (max-width: 750px) {
    font-size: 55%;
  }
  
}

body{
  background-color: #1d1d1d;
  height: 100vh;
  
}
body::-webkit-scrollbar {
  width: 10px;
}
body::-webkit-scrollbar-track {
  background-color: #1d1d1d;
}
body::-webkit-scrollbar-thumb {
  background-color: #14abc6;
  border-radius: 20px;
  padding: 1rem;
}
`
