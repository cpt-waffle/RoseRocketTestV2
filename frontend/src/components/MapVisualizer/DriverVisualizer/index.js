import React from 'react'
import { Layer, Circle, Line } from 'react-konva'

const findPassedLegs = (driver, legs) => {
  const lastLeg = legs.find( leg => leg.legID === driver.activeLegID )
  const lastLegIndex = legs.findIndex( leg => leg.legID === lastLeg.legID)
  return legs.slice(0, lastLegIndex)
}

const findProjectionPoint = (x1, x2, progress) =>((x2 - x1)/100) * progress + x1

const markLastLegProgress = (driver, stops) => {
  if (driver.hasOwnProperty('activeLegID') && stops.length > 0) {
    const startStop = stops.find( stop => stop.name === driver.activeLegID[0])
    const endStop = stops.find( stop => stop.name === driver.activeLegID[1])
    const x3 = findProjectionPoint(startStop.x, endStop.x, driver.legProgress)
    const y3 = findProjectionPoint(startStop.y, endStop.y, driver.legProgress)
    return <Line key={`${driver.activeLegID}Progress`} points={[startStop.x*7, startStop.y*7, x3*7, y3*7]} stroke="green" strokeWidth={3} />
  }
  return
}

const markPassedLegs = (leg, stops) => {
  const startStop = stops.find( stop => stop.name === leg.startStop)
  const endStop = stops.find( stop => stop.name === leg.endStop)
  return <Line key={leg.legID} points={[startStop.x*7, startStop.y*7, endStop.x*7, endStop.y*7]} stroke="green" strokeWidth={3} />
}

const markPassedStops = (driver, stops) => {
  const lastStop = driver.legProgress === 100 ? driver.activeLegID[1] : driver.activeLegID[0]
  const lastStopIndex = stops.findIndex( stop => stop.name === lastStop)
  return stops.slice(0, lastStopIndex+1)
}

const DriverVisualizer = ({store}) => {
  const { driver, legs, stops } = store
  const passedStops = driver.hasOwnProperty('activeLegID') ? markPassedStops(driver,stops) : []
  const passedLegs = legs.length ? findPassedLegs(driver, legs) : []
  return (
    <Layer>
      {markLastLegProgress(driver, stops)}
      {passedLegs.map( leg => markPassedLegs(leg, stops))}
      {passedStops.map( stop => <Circle key={stop.name} x={stop.x*7} y={stop.y*7} width={20} height={20} fill="green" />)}
    </Layer>
  )
}

export default DriverVisualizer