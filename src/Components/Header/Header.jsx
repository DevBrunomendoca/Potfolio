import Links from '../../Links'
import { LinksNav } from '../../LinksStyle'
import Logo from '../../Logo'
import { ContainerHeader, ContentHeader, Nav } from './HeaderStyle'

import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SideBar from './SideBar'
import IconSideBar from './iconsSideBar'

export default function Header() {

  const [sideBar, setSideBar] = useState(false)
  const toggleSideBar = () => setSideBar(!sideBar)

  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".content-nav",
          start: "top bottom"
        }
      })
        .fromTo("#logo", {
          opacity: 0,
          x: -130
        }, {
          opacity: 1,
          x: 0,
          duration: 1
        })
        .fromTo(".navigation", {
          opacity: 0,
          x: 100
        }, {
          opacity: 1,
          x: 0,
          duration: 1.5
        })

    })
    return () => {
      gsap.killTweensOf(".ccontainer-content")
    }
  }, [])

  return (
    <>
      <ContainerHeader>
        <ContentHeader>
          <Nav className='content-nav' ref={el} >
            <Logo id="logo" />
            <LinksNav className='navigation'>
              <Links hrefLink='#content-about' titleLink="Sobre" />
              <Links hrefLink='#content-projects' titleLink="Projetos" />
              <Links hrefLink='#content-skills' titleLink="Habilidades" />
              <Links hrefLink='#container-footer' titleLink="Contato" />
            </LinksNav>
            <IconSideBar sideBar={sideBar} onclick={() => toggleSideBar()} />
          </Nav>
        </ContentHeader>
        {SideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar} />}
      </ContainerHeader>
    </>
  )
}