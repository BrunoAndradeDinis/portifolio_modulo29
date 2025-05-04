import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"
import { Card, LinkBotao } from "./styles"

type Props = {
  titulo: string
  subtitulo: string
  link: string
}

export const Projeto = ({ titulo, subtitulo, link }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{subtitulo}</Paragrafo>
    <LinkBotao href={link}>Visitar</LinkBotao>
  </Card>
)
