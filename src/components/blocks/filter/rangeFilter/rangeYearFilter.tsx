import { useState } from 'react'
import { StyledSlider, StyledThumb, StyledTrack } from './styled'

type yearFilter = {
  onYearChange: (params: any) => void
}

const RangeYearFilter: React.FC<yearFilter> = ({ onYearChange }) => {
  const Thumb = (props: any, state: any) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  )
  const Track = (props: any, state: any) => (
    <StyledTrack {...props} index={state.index} />
  )
  return (
    <>
      <StyledSlider
        minDistance={1}
        defaultValue={[1, 15]}
        renderTrack={Track}
        renderThumb={Thumb}
        min={1}
        max={15}
        onChange={(value) => {
          onYearChange(value)
        }}
      />
    </>
  )
}

export default RangeYearFilter
