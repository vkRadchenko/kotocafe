import colors from 'consts/colors'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.primary};
  color: #fff;
  height: 40px;
  > :last-child {
    cursor: pointer;
  }
`
