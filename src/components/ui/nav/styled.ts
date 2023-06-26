import { projectColors } from 'consts/projectColors'
import styled from 'styled-components'

export const Logo = styled.img`
  width: 50px;
`
export const LogoText = styled.span`
  font-size: 16px;
  margin-left: 10px;
  line-height: 20px;
`
export const LoginWrap = styled.span`
  :hover {
    color: ${`${projectColors.hoverBaseColor}`};
  }
`
export const NavLinkCustom = styled.ul`
  display: flex;
  flex: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
  .nav-item {
    text-align: center;
  }
  .nav-item:hover {
    color: ${`${projectColors.hoverBaseColor}`};
  }
`
