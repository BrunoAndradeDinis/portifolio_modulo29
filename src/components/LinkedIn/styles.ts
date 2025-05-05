import styled from "styled-components"
import { Theme } from "../../themes/dark"

export const LinkedIN = styled.a`
  &:hover {
    color: ${({ theme }) => (theme as Theme).corDeFundoBotaoHoverAzul};
  }
`
