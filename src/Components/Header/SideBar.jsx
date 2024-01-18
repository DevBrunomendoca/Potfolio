import Links from "../../Links";
import { ContentSideBar } from "./SideBarStyle";

export default function SideBar({sideBar, setSideBar}) {

  const closeSideBar = () => [
    setSideBar(!sideBar)
  ]

  return (
    <ContentSideBar sideBar={sideBar} >
      {sideBar && 
      <ul>
        <Links onClick={closeSideBar} hrefLink='#content-about' titleLink="Sobre" />
        <Links onClick={closeSideBar} hrefLink='#content-projects' titleLink="Projetos" />
        <Links onClick={closeSideBar} hrefLink='#content-skills' titleLink="Habilidades" />
        <Links onClick={closeSideBar} hrefLink='#container-footer' titleLink="Contato" />
      </ul>
      }
    </ContentSideBar>
  )
}