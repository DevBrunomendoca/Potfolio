import SubTitle from '../../SubTitle'
import { ContainerSkills, ContentSkills, CardsSkills } from './SkillsStyle'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Skills() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

 gsap.registerPlugin(ScrollTrigger)
  gsap.context(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".content-skills",
        start: "top bottom"
      }
    })

    .fromTo( ".title-skills", {
      opacity: 0,
      y: -70,
      
    },{
      opacity:1 ,
      y: 0,
      duration: 1.5
    })
    .fromTo( "#card-1", {
      opacity: 0,
      y: -100,
      delay: 0
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-2", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-3", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-4", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-5", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-6", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-7", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-8", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-9", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-10", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-11", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })
    .fromTo( "#card-12", {
      opacity: 0,
      y: -100
    },{
      opacity:1 ,
      y: 0,
      duration: 1,
      delay: 0
    })

  })
  return () => {
    gsap.killTweensOf(".content-skills")
  }
},[])

  return(
    <ContainerSkills className='content-skills' ref={el}>
      <SubTitle textSubtitle='Habilidades' className="title-skills"/>
      <ContentSkills>
        <CardsSkills id='card-1'><img src="/icone-html-5.png" alt="" /></CardsSkills>
        <CardsSkills id='card-2'><img src="/icone-css-3.png" alt="" /></CardsSkills>
        <CardsSkills id='card-3'><img src="/icone-javascript.png" alt="" /></CardsSkills>
        <CardsSkills id='card-4'><img src="/icone-typescript.svg" alt="" /></CardsSkills>
        <CardsSkills id='card-5'><img src="/icone-reactjs.svg" alt="" /></CardsSkills>
        <CardsSkills id='card-6'><img src="/icone-nextjs.svg" alt="" /></CardsSkills>
        <CardsSkills id='card-7'><img src="/icone-styledComponets.png" alt="" /> </CardsSkills>
        <CardsSkills id='card-8'><img src="/icone-tailwind-css.png" alt="" /></CardsSkills>
        <CardsSkills id='card-9'><img src="/icone-sass.svg" alt="" /></CardsSkills>
        <CardsSkills id='card-10'><img src="/icone-materialui.svg" alt="" /></CardsSkills>
        <CardsSkills id='card-11'><img src="/icone-figma.png" alt="" /></CardsSkills>
        <CardsSkills id='card-12'><img src="/icone-apolo.png" alt="" /></CardsSkills>
      </ContentSkills>
    </ContainerSkills>
  )
}