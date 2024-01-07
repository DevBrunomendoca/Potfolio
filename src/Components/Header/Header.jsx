import Links from '../../Links'
import { LinksNav } from '../../LinksStyle'
import Logo from '../../Logo'
import { ContainerHeader, ContentHeader, Nav } from './HeaderStyle'

export default function Header() {
  return (

    <ContainerHeader>
      <ContentHeader>
        <Nav>
          <Logo />
          <LinksNav>
            <Links hrefLink='#' titleLink="Sobre" />
            <Links hrefLink='#' titleLink="Projetos" />
            <Links hrefLink='#' titleLink="Habilidades" />
            <Links hrefLink='#' titleLink="Contato" />
          </LinksNav>
        </Nav>
      </ContentHeader>
    </ContainerHeader>
  )
}