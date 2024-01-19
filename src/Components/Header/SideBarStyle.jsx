import styled from "styled-components";
import { css } from "styled-components"

export const ContentSideBar = styled.nav`

display: flex;

${({sideBar}) => sideBar && css`

  background-color: var(--primary-color);
  position: absolute;
  height: 100vh;
  top: 100px;
  left: 0;
  width: 100%;
  animation: showSideBar .5s;
  display: none;
  z-index: -1 !important;
  @media (max-width: 750px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  }
    
  @keyframes showSideBar {
    from {
      opacity: 0;
      height: 0;
    }
    to{
      opacity: 1;
      height: 100vh;
    }
  } 
  
  ul {
    margin-top: -100px;
    @media (max-width: 500px) {
      margin-top: -200px;
    }
  }
  ul>li {
    margin-top: 10px;
    @media (max-width: 500px) {
      margin-top: 30px;
    }
  }
  ul>li>a {
    font-size: 3rem !important;
  }
`}
`