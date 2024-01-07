import { LinkStyle } from './LinksStyle'

export default function Links({ titleLink, hrefLink }) {
  return(
    <LinkStyle>
      <a href={hrefLink}>{titleLink}</a>
    </LinkStyle>
  )
}