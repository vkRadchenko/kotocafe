import { projectColors } from 'consts/projectColors';
import styled from 'styled-components';

export const Logo = styled.img`
  width: 50px;
`;
export const LogoText = styled.span`
  font-size: 16px;
  margin-left: 10px;
  line-height: 20px;
`;
export const LoginWrap = styled.span`
  :hover {
    color: ${`${projectColors.hoverBaseColor}`};
  }

  @media (max-width: 768px) {
    display: block;
    margin-top: 100px;
  }
`;
export const NavLinkCustom = styled.ul`
  display: flex;
  flex: wrap;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;

  .nav-item {
    text-align: center;
    color: rgb(67, 110, 111);
  }
  .nav-item:hover {
    color: ${`${projectColors.hoverBaseColor}`};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-grow: 0.5;
    font-size: 18px;
  }
`;
