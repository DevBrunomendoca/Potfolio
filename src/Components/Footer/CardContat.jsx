import Paragraph from "../../Paragraph";
import { Subtitle } from "../../SubTitleStyle";
import { ContainerCardContact } from './FooterStyle'

export default function CarrdContat({href, img, title, subtitle }) {
  return (
    <ContainerCardContact>
      <a target="_blank" href={href}>
        <div>
          <img src={img} alt={`icon ${title}`} />
        </div>
      </a>
      <h3>{title}</h3>
      <Paragraph textParagraph={subtitle}/>
    </ContainerCardContact>
  )
}