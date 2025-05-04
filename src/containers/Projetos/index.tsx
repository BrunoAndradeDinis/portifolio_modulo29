import { useEffect, useState } from "react"
import { Projeto } from "../../components/Projeto"
import Titulo from "../../components/Titulo"
import { Lista } from "./styles"

const Projetos = () => {
  const url = "https://api.github.com/users/BrunoAndradeDinis/repos"
  const [repos, setRepos] = useState([])
  const [estaCarregando, setEstacarregando] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resJson => {
        setTimeout(() => {
          setEstacarregando(false)
          setRepos(resJson)
        }, 2000)
        console.log(resJson)
      })
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {estaCarregando && <h4>Esta carregando...</h4>}

        {repos.map(({ id, name, description, html_url }) => (
          <li key={id}>
            <Projeto
              titulo={name}
              subtitulo={description}
              link={html_url}
            ></Projeto>
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
