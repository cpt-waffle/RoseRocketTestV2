import React from 'react'
import { Layer, Circle, Line } from 'react-konva'

const distanceFormula = (x1, y1, x2, y2) => Math.sqrt( Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

const getShortestStop = (bonusDriver, stops) => {
  const temp = stops.map( stop => {
    stop.distance = distanceFormula(bonusDriver.xCordinate, bonusDriver.yCordinate, stop.x, stop.y)
    return stop
  })
  let shortestStop = temp[0]
  for (let i of temp) if (shortestStop.distance > i.distance) shortestStop = i

  return shortestStop
}

const DriverVisualizer = ({bonusDriver, stops, zoom}) => {
  const shortestStop = getShortestStop(bonusDriver, stops)
  return (
    <Layer>
    { shortestStop &&
      <Line points={[shortestStop.x*zoom, shortestStop.y*zoom, bonusDriver.xCordinate*zoom, bonusDriver.yCordinate*zoom]} stroke="red" strokeWidth={3} />
    }
      <Circle x={bonusDriver.xCordinate*zoom} y={bonusDriver.yCordinate*zoom} width={3*zoom} height={3*zoom} fill="red" />
    </Layer>
  )
}

export default DriverVisualizer