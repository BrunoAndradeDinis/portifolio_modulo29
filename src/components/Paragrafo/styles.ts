import styled from "styled-components"
import { Props } from "."

export const P = styled.p<Props>`
  color: ${({ tipo, theme }) =>
    tipo === "principal" ? theme.corPrincipal : theme.corSecundaria};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")};
  line-height: 22px;
`
