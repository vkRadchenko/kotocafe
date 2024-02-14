import styled from 'styled-components';

export const MainWraper = styled.div`
  flex-grow: 1;
`;
export const ImgCatHome = styled.img`
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    max-width: 420px;
  }
  @media (max-width: 840px) {
    max-width: 350px;
  }
  @media (max-width: 390px) {
    max-width: 250px;
  }
`;
