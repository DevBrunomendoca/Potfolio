import Footer from '../Footer/Footer'
import About from '../SectionAbout/About'
import Home from '../SectionHome/Home'
import Projects from '../SectionProjects/Projects'
import Skills from '../SectionSkills/Skills'
import { ContainerMain} from './MainStyled'

export default function Main() {
  return(
    <ContainerMain>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </ContainerMain>
  )
}