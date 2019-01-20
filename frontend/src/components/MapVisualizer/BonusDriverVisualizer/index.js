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

const DriverVisualizer = ({bonusDriver, stops}) => {
  const shortestStop = getShortestStop(bonusDriver, stops)
  return (
    <Layer>
    { shortestStop &&
      <Line points={[shortestStop.x*7, shortestStop.y*7, bonusDriver.xCordinate*7, bonusDriver.yCordinate*7]} stroke="red" strokeWidth={3} />
    }
      <Circle x={bonusDriver.xCordinate*7} y={bonusDriver.yCordinate*7} width={20} height={20} fill="red" />
    </Layer>
  )
}

export default DriverVisualizer