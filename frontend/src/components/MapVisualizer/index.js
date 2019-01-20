import React from 'react';
import BonusDriverVisualizer from './BonusDriverVisualizer'
import DriverVisualizer from './DriverVisualizer'
import LiveProgress from './LiveProgress'
import { Stage, Layer, Circle, Line } from 'react-konva'

const connectStops = (leg, stops, zoom) => {
  const startStop = stops.find( (stop) => stop.name === leg.startStop)
  const endStop = stops.find( (stop) => stop.name === leg.endStop)
  return <Line key={leg.legID} points={[startStop.x*zoom, startStop.y*zoom, endStop.x*zoom, endStop.y*zoom]} stroke="#00ccf8" strokeWidth={3} />
}

const MapVisualizer = ({store}) => {
  const { currentLegID, currentProgress, bonusDriver, legs, stops, zoom } = store
  return (
    <Stage width={200*zoom} height={200*zoom} >
      <Layer>
        {legs.map(leg => connectStops(leg, stops, zoom))}
        {stops.map(stop => <Circle key={stop.name} x={stop.x*zoom} y={stop.y*zoom} width={3*zoom} height={3*zoom} fill="#00ccf8" />)}
      </Layer>
      <DriverVisualizer store={store} />
      {bonusDriver.xCordinate && bonusDriver.xCordinate !== "-1" && <BonusDriverVisualizer bonusDriver={bonusDriver} stops={stops} zoom={zoom}/>}
      <LiveProgress currentLegID={currentLegID} currentProgress={currentProgress} stops={stops} zoom={zoom} />
    </Stage>
  )
}

export default MapVisualizer

