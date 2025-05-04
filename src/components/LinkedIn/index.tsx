import { LinkedIN } from "./styles"
import { FaLinkedin } from "react-icons/fa"
import temaDark, { Theme } from "../../themes/dark"

export const LinkedIn = () => (
  <LinkedIN href="https://www.linkedin.com/in/bruno-de-andrade-dinis/">
    <FaLinkedin
      size={30}
      color={(temaDark as Theme).corDeFundoBotaoHoverAzul}
    ></FaLinkedin>
  </LinkedIN>
)
