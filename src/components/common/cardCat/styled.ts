import styled from 'styled-components'

export const CardWrapper = styled.div`
  cursor: pointer;
  :hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  transition: 0.3s;
  color: inherit;
`

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
export const Like = styled.i`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: white;
  :hover {
    color: #e63030;
  }
`
export const TextWrap = styled.div`
  overflow: hidden;
  position: relative;
  height: 140px;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 5.2em;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 100%);
    pointer-events: none;
  }
`
