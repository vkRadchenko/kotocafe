import { projectColors } from 'consts/projectColors'
import styled from 'styled-components'

export const PaginateButton = styled.ul`
  .page-link {
    background-color: ${projectColors.baseColor};
    color: white;
    border: none;
    margin-right: 2px;
    :hover {
      background-color: ${projectColors.hoverBaseColor};
    }
    :focus {
      box-shadow: 0px 0px 3px 1px ${projectColors.baseColor};
    }
  }
`
