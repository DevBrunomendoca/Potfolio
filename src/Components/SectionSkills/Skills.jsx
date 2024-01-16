import SubTitle from '../../SubTitle'
import { ContainerSkills, ContentSkills, CardsSkills } from './SkillsStyle'





export default function Skills() {
  return(
    <ContainerSkills>
      <SubTitle textSubtitle='Habilidades'/>
      <ContentSkills>
        <CardsSkills><img src="/icone-html-5.png" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-css-3.png" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-javascript.png" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-typescript.svg" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-reactjs.svg" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-nextjs.svg" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-styledComponets.png" alt="" /> </CardsSkills>
        <CardsSkills><img src="/icone-tailwind-css.png" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-sass.svg" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-materialui.svg" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-figma.png" alt="" /></CardsSkills>
        <CardsSkills><img src="/icone-apolo.png" alt="" /></CardsSkills>
      </ContentSkills>
    </ContainerSkills>
  )
}