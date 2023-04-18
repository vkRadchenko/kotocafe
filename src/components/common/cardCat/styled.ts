import styled from 'styled-components'

export const CardWrapper = styled.div`
  cursor: pointer;
  :hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  transition: 0.3s;
`

export const CardImage = styled.img`
  width: 100%;
  object-fit: scale-down;
`
export const Like = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  :hover {
    color: #e63030;
  }
`
