import styled from "styled-components"
import { Theme } from "../../themes/dark"

export const GitHUB = styled.a`
  &:hover {
    color: ${({ theme }) => (theme as Theme).corDeFundoBotaoHoverAzul};
  }
`
