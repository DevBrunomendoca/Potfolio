import styled, { css } from "styled-components";

export const ContentIcon = styled.div`
  cursor: pointer;
  display: none;
div {
  width: 34px;
  height: 2px;
  background-color: var(--third-color);
  margin: 3px;
}
.line-two {
  width: 20px;
  transition: .2s !important;
}
@media (max-width: 750px) {
  display: flex;
  flex-direction: column;
  align-items: end;
}

${({close}) => close && css`

  div {
    transition: all.5s;
    position: relative;
    top: 7px;
    left: 15px;
  }
.line-one {
  transform: rotate(-45deg) translate(-9px, -9px);
}
.line-two {
  opacity: 0;
}
.line-three {
  transform: rotate(45deg) translate(-20px, -2px);
}
`}
`