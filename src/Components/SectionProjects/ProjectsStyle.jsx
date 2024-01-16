import styled from "styled-components";

export const ContainerProjects = styled.section`
width: 100%;
margin-top: 5rem;
padding: 5rem 2rem;
width: 100%;
background-color: #1d1d1d;
display: flex;
flex-direction: column;
align-items: center;

`
export const ContentProjects = styled.div`
max-width: 1200px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
place-items: center;
gap: 3rem;
margin: 0 auto;
padding: 5rem 0;
@media (max-width: 700px) {
  grid-template-columns: 1fr;
}
`
export const CardProjectsStyle = styled.div`
height: 100%;
background-color: transparent;
border: 1px solid var(--second-color);
border-radius: 10px;
padding: 3.5rem 2.5rem;
display: flex;
flex-direction: column;
gap: 2rem;
justify-content: space-around;
h3 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--third-color);
  margin-top: 1rem;
}
p {
  font-size: 1.6rem;
  line-height: 120%;
}
div {
  margin-top: 4rem;
  display: flex;
  gap: 2rem
  
}
div>a {
  padding: 1.5rem 3rem;
  border-radius: 30px;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}
div>a>button {
  
  color: #fff;
  background-color: transparent;
  border: none;
}
div>a:not(:first-child) {
  background-color: transparent;
  border: 1px solid #fff;
  transition: all.5s;
}
div>a:not(:first-child):hover  {
  background-color: var(--second-color);
  border: 1px solid var(--second-color);
}
div>a:first-child {
  background: rgb(20,171,198);
background: linear-gradient(201deg, rgba(20,171,198,1) 27%, rgba(145,96,214,1) 100%);
  border: none;
  transition: 10s ease-in-out;
  box-shadow: rgb(20,171,198, 0.2) 0px 8px 24px, rgb(20,171,198, 0.2) 0px 16px 56px, rgb(20,171,198, 0.1) 0px 24px 80px;
}
div>a:first-child:hover {
  background: rgb(145,96,214);
  background: linear-gradient(201deg, rgba(145,96,214,1) 0%, rgba(20,171,198,1) 83%);
}
`