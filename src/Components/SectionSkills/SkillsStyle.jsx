import styled from "styled-components";

export const ContainerSkills = styled.section`
width: 100%;
padding: 5rem 2rem;
h2 {text-align: center;}
`
export const ContentSkills = styled.div`
margin: 0 auto;
max-width: 1200px;
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 3rem;
padding: 5rem 0;
img { 
  width: 60px;
}
@media (max-width: 700px) {
  grid-template-columns: repeat(2, 1fr);
}
`
export const CardsSkills = styled.div`
height: 160px;
background-color: #1d1d1d;
display: flex;
align-items: center;
justify-content: center;
border-bottom: 2px solid var(--second-color);
border-radius: 10px;
transition: all.5s;
cursor: pointer;
&:hover {
  transform: scale(1.1);
}

`