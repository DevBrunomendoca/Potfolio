import { ButtonStyle } from './ButtonStyle'

export default function Button({id ,textButton}) {
  return(
    <ButtonStyle id={id}>
      <a href="curriculo.pdf" download >{textButton}</a>
    </ButtonStyle>
  )
}