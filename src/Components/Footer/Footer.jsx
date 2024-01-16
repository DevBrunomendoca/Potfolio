import Logo from '../../Logo'
import Paragraph from '../../Paragraph'
import CarrdContat from './CardContat'
import { ContainerFooter, ContainerContact, Copyright } from './FooterStyle'

export default function Footer() {
  return (
    <ContainerFooter>
      <ContainerContact>
        <CarrdContat
          img='/icon-email.png'
          title='E-mail'
          subtitle='brunomendoncamal@gmail.com'
        />
        <CarrdContat
          img='/icon-whatsapp.png'
          title='Telefone'
          subtitle='(62) 992544864'
        />
        <CarrdContat
          img='/icon-linkedin.png'
          title='Linkedin'
          subtitle='@brunomendonça'
        />
        <CarrdContat
          img='/icon-github.png'
          title='Github'
          subtitle='@DevBrunomendoca'
        />

      </ContainerContact>
      <Copyright>
        <div>
          <Logo />
          <Paragraph textParagraph='© Copyright | Developed By BRUNO MENDONÇA' />
        </div>
      </Copyright>
    </ContainerFooter>
  )
}