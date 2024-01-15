import styled from "styled-components";

export const ContainerAbout = styled.section`

max-width: 1200px;
margin: 0 auto;
margin: 5rem 2rem;
background-color: #1d1d1d;
border-radius: 10px;
border: 3px solid #363636;
display: flex;
justify-content: space-around;


`

export const ContainerImg = styled.div`

padding: 2rem;
width: 50%;

img { 
  width: 100%;
  border-radius: 10px;
}
`

export const ContainerContent = styled.div`


display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
gap: 3rem;

max-width: 500px;

p {
  font-size: 2rem;
  line-height: 150%;
}
`

export const Navigation = styled.nav`

ul {
  display: flex;
  gap: 2rem;
}


ul a{ 
  background-color: var(--primary-color);
  padding: 1.5rem;
  border-radius: 10px;
  border: .250rem solid transparent;
  transition: all.5s;

  &:hover {
    border: .250rem solid var(--second-color);
  }
}
`