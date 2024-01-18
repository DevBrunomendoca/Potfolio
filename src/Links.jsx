import { LinkStyle } from './LinksStyle'

export default function Links({ titleLink, hrefLink, onClick }) {
  return(
    <LinkStyle onClick={onClick}>
      <a href={hrefLink}>{titleLink}</a>
    </LinkStyle>
  )
}