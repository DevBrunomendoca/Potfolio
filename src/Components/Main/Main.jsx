import About from '../SectionAbout/About'
import Home from '../SectionHome/Home'
import Projects from '../SectionProjects/Projects'
import { ContainerMain} from './MainStyled'

export default function Main() {
  return(
    <ContainerMain>
      <Home />
      <About />
      <Projects />
    </ContainerMain>
  )
}