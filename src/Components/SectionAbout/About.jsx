import Paragraph from '../../Paragraph'
import SubTitle from '../../SubTitle'
import { ContainerAbout, ContainerImg, ContainerContent, Navigation } from './AboutStyle'

export default function About() {
  return(
    <ContainerAbout>
    <ContainerImg>
      <img src="/perfil-1.png" alt="foto de perfil" />
    </ContainerImg>
    <ContainerContent>
      <SubTitle textSubtitle="Mais sobre"/>
      <Paragraph textParagraph="Minha jornada no desenvolvimento web começou com a fascinação por criar interfaces envolventes e funcionais. Ao longo dos anos, adquiri experiência sólida em JavaScript, TypeScript, React.js, Next.js, Styled Components e consumo de APIs REST, para construir aplicações interativas e responsivas."/>
      <p> </p>
      <Navigation>
        <ul>
          <a href="#"><img src="/icon-linkedin.png" alt="icone linkedin"/></a>
          <a href="#"><img src="/icon-github.png" alt="icone github"/></a>
          <a href="#"><img src="/icon-instagram.png" alt="icone instagram"/></a>
          <a href="#"><img src="/icon-whatsapp.png" alt="icone whatsapp"/></a>
          <a href="#"><img src="/icon-email.png" alt="icone email"/></a>
        </ul>
      </Navigation>
    </ContainerContent>
    </ContainerAbout>
  )
}