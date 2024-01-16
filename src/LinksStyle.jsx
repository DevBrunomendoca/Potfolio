import styled from "styled-components";

export const LinksNav = styled.ul`

  display: flex;
  align-items: center;
  gap: 2.5rem;
  @media (max-width: 750px) {
    display: none;
  }
`

export const LinkStyle = styled.li`

  list-style: none;
  cursor: pointer;
a {
  text-decoration:none;
  color: var(--third-color);
  font-size: 2rem;
  font-weight: 400;
  opacity:.7;
  transition: all.5s;
  position: relative;
  padding-bottom: .8rem;

  &::after {
    content: "" ;
    width: 0%; 
    height: 2px;
    background-color: var(--second-color);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: .5s ease-in-out;
}
&:hover::after {
  width: 100%; 
}
&:hover {
  opacity: 1;
}
}
`