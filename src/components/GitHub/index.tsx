import { GitHUB } from "./styles"
import { FaGithub } from "react-icons/fa"
import temaDark, { Theme } from "../../themes/dark"

export const GitHub = () => (
  <GitHUB href="https://github.com/BrunoAndradeDinis" target="_blank">
    <FaGithub size={30} color={(temaDark as Theme).corDeFundoBotao}></FaGithub>
  </GitHUB>
)
