import Button from '../../Button'
import Paragraph from '../../Paragraph'
import { ParagraphStyle } from '../../ParagraphStyle'
import { ContainerHome, Title, ContainerContent, ConteineImg } from './HomeStyle'

import { gsap } from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

 gsap.registerPlugin(ScrollTrigger)
  gsap.context(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-home",
        start: "top bottom"
      }
    })

    .fromTo( "#title", {
      opacity: 0,
      y: -140
    },{
      opacity:1 ,
      y: 0,
      duration: 1.5
    })

  })
  return () => {
    gsap.killTweensOf(".content-home")
  }
},[])

  return (
    <ContainerHome>
      <ContainerContent className="content-home" ref={el}>
        <Title id="title">
          Olá, meu nome é <span>Bruno Mendonça</span>, sou Desenvolvedor Front-end<span></span> .
        </Title>
        <ParagraphStyle>
          <Paragraph textParagraph="Transformo ideias em experiências digitais inovadoras e envolventes, de forma moderna e de alta qualidade." />
        </ParagraphStyle>
        <Button textButton="Download CV" />
      </ContainerContent>
      <ConteineImg>
        <img src="/banner-home-2.svg" alt="" />
      </ConteineImg>
    </ContainerHome>

  )
}