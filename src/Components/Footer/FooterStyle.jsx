import styled from 'styled-components'

export const ContainerFooter = styled.footer`
background-color: #1d1d1d;
padding: 5rem 0 2rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 6rem;
width: 100%;
`
export const ContainerContact = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem 2rem;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
    margin: 0 auto;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`
export const  ContainerCardContact = styled.div`

text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

a>div {
    display: flex;
    justify-content: center;

    border-radius: 10px;
    padding: 1.7rem;
    background-color: var(--primary-color);
  }
  h3 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--third-color);
  margin-top: 1rem;
}
p {
  font-size: 1.5rem;
  line-height: 120%;
}
`
export const Copyright = styled.div`
display: flex;
align-items: center;
gap: 2rem;
width: 100%;
padding: 0 1.5rem ;

div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 700px) {
  flex-direction: column;
}
}
div>p {
  font-size: 1.8rem;
  opacity: 1;
  text-align: center;
  font-weight: 600;
}
@media (max-width: 750px) {
  div>a>img {
    width: 220px !important;
  }
}


`