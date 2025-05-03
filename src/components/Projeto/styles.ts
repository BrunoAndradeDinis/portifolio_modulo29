import styled from "styled-components"

export const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.corDaBorda};
  padding: 1rem;
`
export const LinkBotao = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.corDeFundoBotao};
  color: ${({ theme }) => theme.corTextoBotao};
  font-size: 14px;
  padding: 0.5rem;
  margin-top: 24px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.corDeFundoBotaoHoverAzul};
  }
`
