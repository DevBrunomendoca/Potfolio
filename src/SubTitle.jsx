import { Subtitle } from './SubTitleStyle'

export default function SubTitle({textSubtitle , className}) {
  return(
    <Subtitle className={className}>{textSubtitle} <span>.</span> </Subtitle>
  )
}