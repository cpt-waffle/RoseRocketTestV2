import React from 'react';
import DriverVisualizer from './DriverVisualizer'
import { Stage, Layer, Circle, Line } from 'react-konva';

const connectStops = (leg, stops) => {
  const startStop = stops.find( (stop) => stop.name === leg.startStop)
  const endStop = stops.find( (stop) => stop.name === leg.endStop)
  return <Line key={leg.legID} points={[startStop.x*7, startStop.y*7, endStop.x*7, endStop.y*7]} stroke="darkblue" strokeWidth={3} />
}

const MapVisualizer = ({store}) => {
  const { legs, stops } = store
  return (
    <Stage width={200*2} height={150*5} className="ba">
      <Layer>
        {legs.map(leg => connectStops(leg, stops))}
        {stops.map(stop => <Circle key={stop.name} x={stop.x*7} y={stop.y*7} width={20} height={20} fill="darkblue" />)}
      </Layer>
      <DriverVisualizer store={store} />
    </Stage>
  )
}

export default MapVisualizer

