import { ParagraphStyle } from "../../ParagraphStyle"
import { CardProjectsStyle } from "./ProjectsStyle"

export default function CardProjects({ className }) {
  const data = [
    { id: '1', cover: 'Capa-projeto-1.png', title: 'Realeza Joias', description: 'Site de uma joalheria com um design totalmete responsivo e dinâmico, feito em React.Js e Styled-componets.', btnPrev: 'https://realeza-alian-as.vercel.app/', btnGitHub: 'https://github.com/DevBrunomendoca/Realeza-Alian-as' },
    { id: '2', cover: 'Capa-projeto-3.png', title: 'Correto', description: 'Site de uma cafeteria feito em React.Js com uma interface dinâmica e intuitiva. ', btnPrev: 'https://coffee-shop-kra3.vercel.app/', btnGitHub: 'https://github.com/DevBrunomendoca/Coffee-Shop' },
    { id: '3', cover: 'Capa-projeto-4.png', title: 'DigBank', description: 'Site institucional de um banco digital, feito em React.Js e Styled-components.', btnPrev: 'https://digital-bank-jet.vercel.app/', btnGitHub: 'https://github.com/DevBrunomendoca/Digital-Bank' },
    { id: '4', cover: 'Capa-projeto-2.png', title: 'Photographs', description: 'Site institucional de fotografias feito em React.Js ', btnPrev: 'https://photographs-one.vercel.app/', btnGitHub: 'https://github.com/DevBrunomendoca/-photographs' }
  ]

  return (
    data.map((itens) => (
        <CardProjectsStyle className={className} key={itens.id}>
          <img src={itens.cover} alt={`Capa ${itens.title}`} style={{ width: '100%' }} />
          <h3>{itens.title}</h3>
          <ParagraphStyle>{itens.description}</ParagraphStyle>
          <div>
            <a href={itens.btnPrev} target="_blank"><button>Visualizar Projeto</button></a>
            <a href={itens.btnGitHub} target="_blank"><button>GitHub</button></a>
          </div>
        </CardProjectsStyle>
    ))
  )
}