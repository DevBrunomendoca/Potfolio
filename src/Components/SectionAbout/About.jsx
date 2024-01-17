import Paragraph from '../../Paragraph'
import SubTitle from '../../SubTitle'
import { ContainerAbout, ContainerImg, ContainerContent, Navigation } from './AboutStyle'

import { useRef, useLayoutEffect } from 'react' 
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function About() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

 gsap.registerPlugin(ScrollTrigger)
  gsap.context(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-about",
        start: "-600px"
      }
    })
    .fromTo( "#content-img", {
      opacity: 0,
      y: -140
    },{
      opacity:1 ,
      y: 0,
      duration: 1.8
    })
    .fromTo( "#content-container-about", {
      opacity: 0,
      x: -140
    },{
      opacity:1 ,
      x: 0,
      duration: 1.5
    })

  })
  return () => {
    gsap.killTweensOf(".content-about")
  }
},[])


  return(
    <ContainerAbout className='content-about' ref={el}>
    <ContainerImg id='content-img'  >
      <img src="/perfil-1.png" alt="foto de perfil" />
    </ContainerImg>
    <ContainerContent id='content-container-about'>
      <SubTitle textSubtitle="Mais sobre"/>
      <Paragraph textParagraph="Minha jornada no desenvolvimento web começou com a fascinação por criar interfaces envolventes e funcionais. Ao longo dos anos, adquiri experiência sólida em JavaScript, TypeScript, React.js, Next.js, Styled Components e consumo de APIs REST, para construir aplicações interativas e responsivas."/>
      
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