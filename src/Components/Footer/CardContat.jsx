import Paragraph from "../../Paragraph";
import { Subtitle } from "../../SubTitleStyle";
import { ContainerCardContact } from './FooterStyle'

export default function CarrdContat({img, title, subtitle }) {
  return (
    <ContainerCardContact>
      <a href="#">
        <div>
          <img src={img} alt={`icon ${title}`} />
        </div>
      </a>
      <h3>{title}</h3>
      <Paragraph textParagraph={subtitle}/>
    </ContainerCardContact>
  )
}