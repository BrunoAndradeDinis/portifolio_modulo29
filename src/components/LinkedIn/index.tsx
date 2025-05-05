import { LinkedIN } from "./styles"
import { FaLinkedin } from "react-icons/fa"
import temaDark, { Theme } from "../../themes/dark"

export const LinkedIn = () => (
  <LinkedIN
    href="https://www.linkedin.com/in/bruno-de-andrade-dinis/"
    target="_blank"
  >
    <FaLinkedin
      size={30}
      color={(temaDark as Theme).corDeFundoBotao}
    ></FaLinkedin>
  </LinkedIN>
)
