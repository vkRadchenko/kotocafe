import styled from 'styled-components'
import ReactSlider from 'react-slider'

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
  margin-top: 10px;
`
export const StyledThumb = styled.div`
  height: 22px;
  line-height: 22px;
  width: 22px;
  text-align: center;
  background-color: #0d6efd;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  outline: none;
  &:hover {
    background-color: #2c7ef7;
  }
`

export const StyledTrack = styled.div`
  top: 7px;
  height: 7px;
  bottom: 0;
  background: rgb(231 231 231);
  border-radius: 999px;
`
