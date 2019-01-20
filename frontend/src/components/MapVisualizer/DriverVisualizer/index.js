import React from 'react'
import { Layer, Circle, Line } from 'react-konva'

const findPassedLegs = (driver, legs) => {
  const lastLeg = legs.find( leg => leg.legID === driver.activeLegID )
  const lastLegIndex = legs.findIndex( leg => leg.legID === lastLeg.legID)
  return legs.slice(0, lastLegIndex)
}

const findProjectionPoint = (x1, x2, progress) =>((x2 - x1)/100) * progress + x1

const markLastLegProgress = (driver, stops, zoom) => {
  if (driver.hasOwnProperty('activeLegID') && stops.length > 0) {
    const startStop = stops.find( stop => stop.name === driver.activeLegID[0])
    const endStop = stops.find( stop => stop.name === driver.activeLegID[1])
    const x3 = findProjectionPoint(startStop.x, endStop.x, parseInt(driver.legProgress))
    const y3 = findProjectionPoint(startStop.y, endStop.y, parseInt(driver.legProgress))
    return <Line key={`${driver.activeLegID}Progress`} points={[startStop.x*zoom, startStop.y*zoom, x3*zoom, y3*zoom]} stroke="#24fb3e" strokeWidth={3} />
  }
  return
}

const markPassedLegs = (leg, stops, zoom) => {
  const startStop = stops.find( stop => stop.name === leg.startStop)
  const endStop = stops.find( stop => stop.name === leg.endStop)
  return <Line key={leg.legID} points={[startStop.x*zoom, startStop.y*zoom, endStop.x*zoom, endStop.y*zoom]} stroke="#24fb3e" strokeWidth={3} />
}

const markPassedStops = (driver, stops) => {
  const lastStop = driver.legProgress === 100 ? driver.activeLegID[1] : driver.activeLegID[0]
  const lastStopIndex = stops.findIndex( stop => stop.name === lastStop)
  return stops.slice(0, lastStopIndex+1)
}

const DriverVisualizer = ({store}) => {
  const { driver, legs, stops, zoom } = store
  const passedStops = driver.hasOwnProperty('activeLegID') ? markPassedStops(driver,stops) : []
  const passedLegs = legs.length ? findPassedLegs(driver, legs) : []
  return (
    <Layer>
      {markLastLegProgress(driver, stops, zoom)}
      {passedLegs.map( leg => markPassedLegs(leg, stops, zoom))}
      {passedStops.map( stop => <Circle key={stop.name} x={stop.x*zoom} y={stop.y*zoom} width={3*zoom} height={3*zoom} fill="#24fb3e" />)}
    </Layer>
  )
}

export default DriverVisualizer