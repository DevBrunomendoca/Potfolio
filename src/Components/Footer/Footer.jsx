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
          trigger: "#container-footer",
          start: "-670px"
        }
      })

        .fromTo(".content-contact", {
          opacity: 0,
          x: -140
        }, {
          opacity: 1,
          x: 0,
          duration: 1.5
        })

    })
    return () => {
      gsap.killTweensOf("#container-footer")
    }
  }, [])
  return (
    <ContainerFooter id='container-footer'>
      <ContainerContact className='content-contact'>
        <CarrdContat
        href='https://www.linkedin.com/in/bruno-mendon%C3%A7a-4b0942234/'
          img='/icon-linkedin.png'
          title='Linkedin'
          subtitle='@brunomendonça'
        />
        <CarrdContat
        href='https://github.com/DevBrunomendoca'
          img='/icon-github.png'
          title='Github'
          subtitle='@DevBrunomendoca'
        />
        <CarrdContat
        href='https://wa.me/5562992544864?text=Ol%C3%A1%2C+estou+entrando+em+contato+atrav%C3%A9s+do+seu+portf%C3%B3lio.'
          img='/icon-whatsapp.png'
          title='Telefone'
          subtitle='(62) 992544864'
        />
        <CarrdContat
          img='/icon-email.png'
          title='E-mail'
          subtitle='brunomendoncamal@gmail.com'
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