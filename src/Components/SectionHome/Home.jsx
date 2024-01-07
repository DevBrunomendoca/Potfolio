import Button from '../../Button'
import Paragraph from '../../Paragraph'
import { ParagraphStyle } from '../../ParagraphStyle'
import { ContainerHome, Title } from './HomeStyle'

export default function Home() {
  return(
      <ContainerHome>
      <Title>
        Olá, meu nome é <span>Bruno Mendonça</span>, sou Desenvolvedor Front-end<span></span> .
      </Title> 
      <ParagraphStyle>
        <Paragraph textParagraph="Transformo ideias em experiências digitais inovadoras e envolventes, de forma moderna e de alta qualidade."/>
      </ParagraphStyle>
      <Button textButton="Download CV"/>
      </ContainerHome>
    
  )
}