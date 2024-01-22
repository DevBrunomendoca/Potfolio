import { ButtonStyle } from './ButtonStyle'

export default function Button({id ,textButton}) {
  return(
    <ButtonStyle id={id}>
      <a href="curriculo.pdf" target='_blank' download='curriculo'>{textButton}</a>
    </ButtonStyle>
  )
}