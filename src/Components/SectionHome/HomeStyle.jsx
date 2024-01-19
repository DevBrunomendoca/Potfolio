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
@media (max-width: 950px) {
  padding: 15rem 2rem 10rem;
}
@media (max-width: 550px) {
  padding: 13rem 2rem 10rem;
}
`

export const ContainerContent = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 5.5rem;
margin: 0 auto;
max-width: 1200px;
@media (max-width: 950px) {
  text-align: center;
  align-items: center;
}
@media (max-width: 350px) {
  
}
`
export const ConteineImg = styled.div`
height: 100%;
img {
  height: 900px;
  width: 100%;
}
@media (max-width: 950px) {
  display: none;
}
`
export const Title = styled.h1`

color: var(--third-color);
  font-size: 5rem;
  font-weight: 700;
  max-width:  700px;
  @media (max-width: 750px) {
    font-weight: 500;
    font-size: 4.3rem;
  }
  @media (max-width: 350px) {
    font-size: 4rem;
  }
`