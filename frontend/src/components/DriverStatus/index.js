import React from 'react'


const formatTime = time => {
  let decimalTime = time
  decimalTime = decimalTime * 60 * 60
  let hours = Math.floor((decimalTime / (60 * 60)))
  decimalTime = decimalTime - (hours * 60 * 60)
  let minutes = Math.floor((decimalTime / 60))
  decimalTime = decimalTime - (minutes * 60)
  let seconds = Math.round(decimalTime)

  return `${hours} hr ${minutes} min ${seconds} sec.`
}

const distanceBetweenLegs =  (legs, stops)  =>
  legs.map( leg => {
    const startStop = stops.find( stop => stop.name === leg.startStop)
    const endStop = stops.find( stop => stop.name === leg.endStop)
    leg.distance = distanceFormula(startStop.x, startStop.y, endStop.x, endStop.y)
    return leg
  })

const totalTime = ( legs ) => {
  let sum = 0
  legs.map( leg => {
    sum = sum + ( leg.distance/leg.speedLimit )
    leg.time = leg.distance/leg.speedLimit
    return leg
  })
  return sum
}

const distanceBetweenProgress = (driver, stops) => {
  const startStop = stops.find( stop => stop.name === driver.activeLegID[0])
  const endStop = stops.find( stop => stop.name === driver.activeLegID[1])
  const x2 = findProjectionPoint(startStop.x, endStop.x, parseInt(driver.legProgress))
  const y2 = findProjectionPoint(startStop.y, endStop.y, parseInt(driver.legProgress))
  return distanceFormula(endStop.x, endStop.y, x2, y2)
}

const distanceFormula = (x1, y1, x2, y2) => Math.sqrt( Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

const findProjectionPoint = (x1, x2, progress) =>((x2 - x1)/100) * progress + x1

const distanceLeft = (driver, legs, stops) => {
  const nextLegIndex = legs.findIndex( leg => leg.legID === driver.activeLegID )
  const legsLeftDistance = distanceBetweenLegs(legs, stops).slice(nextLegIndex, legs.length)
  legsLeftDistance[0].distance = distanceBetweenProgress(driver, stops)
  return legsLeftDistance
}

const DriverStatus = ({store, zoomIn, zoomOut}) => {
  const { driver, legs, stops } = store
  return (
    <div className="b flex justify-between sans-serif sky-blue white pv2">
      <div className="ml2">
        <span className="db">Total Time: {formatTime(totalTime(distanceBetweenLegs(legs, stops)))}</span>
        <span className="db">Time Left until Arrival: {formatTime(totalTime(distanceLeft(driver, legs, stops)))}</span>
      </div>
      <div className="mr2">
        <i className="child hover-black-50 fas fa-search-plus fa-2x" onClick={zoomIn}></i>
        <i className="child hover-black-50 fas fa-search-minus fa-2x" onClick={zoomOut}></i>
      </div>
    </div>
  )
}

export default DriverStatus
