import React from 'react'

const distanceBetweenLegs =  (legs, stops)  =>
  legs.map( leg => {
    const startStop = stops.find( stop => stop.name === leg.startStop)
    const endStop = stops.find( stop => stop.name === leg.endStop)
    leg.distance = distanceFormula(startStop.x, startStop.y, endStop.x, endStop.y)
    return leg
  })

const distanceBetweenProgress = (driver, stops) => {
  const startStop = stops.find( stop => stop.name === driver.activeLegID[0])
  const endStop = stops.find( stop => stop.name === driver.activeLegID[1])
  const x2 = findProjectionPoint(startStop.x, endStop.x, parseInt(driver.legProgress))
  const y2 = findProjectionPoint(startStop.y, endStop.y, parseInt(driver.legProgress))
  return distanceFormula(startStop.x, startStop.y, x2, y2)
}

const distanceFormula = (x1, y1, x2, y2) => Math.sqrt( Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

const findProjectionPoint = (x1, x2, progress) =>((x2 - x1)/100) * progress + x1

const distanceLeft = (driver, legs, stops) => {
  const nextLegIndex = legs.findIndex( leg => leg.legID === driver.activeLegID )
  const legsLeftDistance = distanceBetweenLegs(legs, stops).slice(nextLegIndex, legs.length)
  // get progress distance between where user located and the next point
  legsLeftDistance[0].distance = distanceBetweenProgress(driver, stops)
  console.log("ALL DISTANCES WITH WHAT LEGS ARE LEFT")
  console.log(legsLeftDistance)
}

const DriverStatus = ({store}) => {
  const { driver, legs, stops } = store
  distanceLeft(driver, legs, stops)
  //const totalDistance = distanceBetweenStops(legs, stops)
  return (
    <div className="b sans-serif sky-blue white pv2">
      <span>Time Left until Arrival: </span>
    </div>
  )
}

export default DriverStatus
