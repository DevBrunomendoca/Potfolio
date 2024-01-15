import styled from "styled-components";


export const ContainerHome = styled.section`

  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;

  span {
  color: var(--second-color)
  }
  p{
  max-width: 720px;
}
`

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 5.5rem;
margin: 0 auto;
max-width: 1200px;
`
export const ConteineImg = styled.div`
height: 100%;
img {
  height: 900px;
  width: 100%;
}
`
export const Title = styled.h1`

color: var(--third-color);
  font-size: 5rem;
  font-weight: 700;
  max-width:  700px;
`