import Button from '../../Button'
import Paragraph from '../../Paragraph'
import { ParagraphStyle } from '../../ParagraphStyle'
import { ContainerHome, Title, ContainerContent, ConteineImg } from './HomeStyle'

export default function Home() {
  return (
    <ContainerHome>
      <ContainerContent>
        <Title>
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