import { ContainerProjects, ContentProjects, CardProjectsStyle} from './ProjectsStyle'

import SubTitle from "../../SubTitle";
import CardProjects from './CardProjects';

export default function Projects() {
  return(
    <ContainerProjects>
      <SubTitle textSubtitle="Projetos"/>
      <ContentProjects>
        <CardProjects />
      </ContentProjects>
    </ContainerProjects>
  )
}