import React from 'react';
import BonusDriverVisualizer from './BonusDriverVisualizer'
import DriverVisualizer from './DriverVisualizer'
import LiveProgress from './LiveProgress'
import { Stage, Layer, Circle, Line } from 'react-konva'

const connectStops = (leg, stops) => {
  const startStop = stops.find( (stop) => stop.name === leg.startStop)
  const endStop = stops.find( (stop) => stop.name === leg.endStop)
  return <Line key={leg.legID} points={[startStop.x*7, startStop.y*7, endStop.x*7, endStop.y*7]} stroke="#00ccf8" strokeWidth={3} />
}

const MapVisualizer = ({store}) => {
  const { currentLegID, currentProgress, bonusDriver, legs, stops } = store
  return (
    <Stage width={200*7} height={200*7} >
      <Layer>
        {legs.map(leg => connectStops(leg, stops))}
        {stops.map(stop => <Circle key={stop.name} x={stop.x*7} y={stop.y*7} width={20} height={20} fill="#00ccf8" />)}
      </Layer>
      <DriverVisualizer store={store} />
      {bonusDriver.xCordinate && bonusDriver.xCordinate !== "-1" && <BonusDriverVisualizer bonusDriver={bonusDriver} stops={stops} />}
      <LiveProgress currentLegID={currentLegID} currentProgress={currentProgress} stops={stops} />
    </Stage>
  )
}

export default MapVisualizer

