import React from 'react'
import { Layer, Circle, Star } from 'react-konva'

const findProjectionPoint = (x1, x2, progress) =>((x2 - x1)/100) * progress + x1

const markLocation = (currentLegID, currentProgress, stops) => {
  if (currentLegID.hasOwnProperty('value') && stops.length > 0) {
    const startStop = stops.find( stop => stop.name === currentLegID.value[0])
    const endStop = stops.find( stop => stop.name === currentLegID.value[1])
    const x = findProjectionPoint(startStop.x, endStop.x, parseInt(currentProgress))
    const y = findProjectionPoint(startStop.y, endStop.y, parseInt(currentProgress))
    return <Star x={x*7} y={y*7} numPoints={5} innerRadius={5} outerRadius={15} fill="red" />
  }
  return
}

const LiveProgress = ({currentLegID, currentProgress, stops}) => {
  return (
    <Layer>
      {markLocation(currentLegID, currentProgress, stops)}
    </Layer>
  )
}

export default LiveProgress