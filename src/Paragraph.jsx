import { ParagraphStyle } from './ParagraphStyle'

export default function Paragraph({id, textParagraph}) {
  return(
    <ParagraphStyle id={id}>{textParagraph}</ParagraphStyle>
  )
}