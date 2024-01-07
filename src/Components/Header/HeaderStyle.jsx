import styled from "styled-components";

export const ContainerHeader = styled.header`

width: 100%;
height: 100px;
background-color: var(--primary-color);
position: fixed;
top:0;
left:0;
border-bottom: 1px solid var(--second-color);
`

export const ContentHeader = styled.div`

max-width: 1200px;
margin: 0 auto;
`
export const Nav = styled.nav`

display: flex;
align-items: center;
justify-content: space-between;
height: 100px;
padding: 0 2rem;
`