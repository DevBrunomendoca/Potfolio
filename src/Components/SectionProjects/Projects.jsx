import { ContainerProjects, ContentProjects} from './ProjectsStyle'

import SubTitle from "../../SubTitle";
import CardProjects from './CardProjects';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import  { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

 gsap.registerPlugin(ScrollTrigger)
  gsap.context(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#content-projects",
        start: "top bottom"
      }
    })
    .fromTo( ".tltle-projects", {
      opacity: 0,
      y: -60
    },{
      opacity:1 ,
      y: 0,
      duration: 1.5
    })
    .fromTo( ".cards-projects", {
      opacity: 0,
      x: -140
    },{
      opacity:1 ,
      x: 0,
      duration: 1.5
    })
    

  })
  return () => {
    gsap.killTweensOf("#content-projects")
  }
},[])

  return(
    <ContainerProjects id='content-projects' ref={el} >
      <SubTitle className="tltle-projects" textSubtitle="Projetos" />
      <ContentProjects>
        <CardProjects className="cards-projects" />
      </ContentProjects>
    </ContainerProjects>
  )
}