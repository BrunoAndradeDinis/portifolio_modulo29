import Paragrafo from "../../components/Paragrafo"
import { Redes } from "../../components/Redes"
import Titulo from "../../components/Titulo"
import { GitHubSecao } from "./styles"

const Sobre = () => (
  <section>
    <Titulo fontSize={18}>Sobre</Titulo>
    <Paragrafo>
      Sou Assistente Help Desk ll em transição de carreira para Desenvolvedor
      Frontend , com experiência prática no desenvolvimento de interfaces web
      modernas e responsivas. Formado em Desenvolvimento Web pela Ampli e
      capacitado em diversas tecnologias avançadas por instituições como
      EBAC(cursando) e Alura, estou em busca de uma oportunidade para aplicar e
      expandir minhas habilidades técnicas em um ambiente desafiador e inovador.
    </Paragrafo>

    <GitHubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=BrunoAndradeDinis&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"
        alt="img"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=BrunoAndradeDinis&layout=compact&langs_count=6&theme=tokyonight"
        alt="img"
      />
    </GitHubSecao>
    <Redes />
  </section>
)

export default Sobre
