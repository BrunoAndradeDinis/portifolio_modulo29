import styled from "styled-components"
import { Props } from "."

export const Titulo = styled.h3<Props>`
  color: ${({ theme }) => theme.corPrincipal};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "14px")};
  font-weight: bold;
  margin-bottom: 16px;
`
