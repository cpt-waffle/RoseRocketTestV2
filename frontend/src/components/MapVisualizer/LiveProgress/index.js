import React from 'react'
import { Layer, Star } from 'react-konva'

const findProjectionPoint = (x1, x2, progress) =>((x2 - x1)/100) * progress + x1

const markLocation = (currentLegID, currentProgress, stops, zoom) => {
  if (currentLegID.hasOwnProperty('value') && stops.length > 0) {
    const startStop = stops.find( stop => stop.name === currentLegID.value[0])
    const endStop = stops.find( stop => stop.name === currentLegID.value[1])
    const x = findProjectionPoint(startStop.x, endStop.x, parseInt(currentProgress))
    const y = findProjectionPoint(startStop.y, endStop.y, parseInt(currentProgress))
    return <Star x={x*zoom} y={y*zoom} numPoints={5} innerRadius={zoom} outerRadius={2 * zoom} fill="red" />
  }
  return
}

const LiveProgress = ({currentLegID, currentProgress, stops, zoom}) => {
  return (
    <Layer>
      {markLocation(currentLegID, currentProgress, stops, zoom)}
    </Layer>
  )
}

export default LiveProgress