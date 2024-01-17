import Logo from '../../Logo'
import Paragraph from '../../Paragraph'
import CarrdContat from './CardContat'
import { ContainerFooter, ContainerContact, Copyright } from './FooterStyle'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Footer() {

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {

 gsap.registerPlugin(ScrollTrigger)
  gsap.context(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: ".container-footer",
        start: "top bottom"
      }
    })

    .fromTo( ".content-contact", {
      opacity: 0,
      x: -140
    },{
      opacity:1 ,
      x: 0,
      duration: 1.5
    })

  })
  return () => {
    gsap.killTweensOf(".container-footer")
  }
},[])
  return (
    <ContainerFooter className='container-footer'>
      <ContainerContact className='content-contact'>
        <CarrdContat
          img='/icon-email.png'
          title='E-mail'
          subtitle='brunomendoncamal@gmail.com'
        />
        <CarrdContat
          img='/icon-whatsapp.png'
          title='Telefone'
          subtitle='(62) 992544864'
        />
        <CarrdContat
          img='/icon-linkedin.png'
          title='Linkedin'
          subtitle='@brunomendonça'
        />
        <CarrdContat
          img='/icon-github.png'
          title='Github'
          subtitle='@DevBrunomendoca'
        />

      </ContainerContact>
      <Copyright>
        <div>
          <Logo />
          <Paragraph textParagraph='© Copyright | Developed By BRUNO MENDONÇA' />
        </div>
      </Copyright>
    </ContainerFooter>
  )
}