import React, { Component } from 'react';
import { Stage, Layer, Circle, Line } from 'react-konva';

export default class MapVisualizer extends Component {

  constructor(props) {
    super(props);
  }

  connectStops(leg) {
    const startStop = this.props.store.stops.find( (stop) => stop.name === leg.startStop)
    const endStop = this.props.store.stops.find( (stop) => stop.name === leg.endStop)
    return <Line key={leg.legID} points={[startStop.x*7, startStop.y*7, endStop.x*7, endStop.y*7]} stroke="darkblue" strokeWidth="1"/>
  }

  render() {
    const { legs, stops } = this.props.store
    console.log(legs.length > 0 && stops.length > 0)
    return (
      <Stage width={200*2} height={150*5} className="ba">
        <Layer>
          {legs.map(leg => this.connectStops(leg))}
          {stops.map(stop => <Circle key={stop.name} x={stop.x*7} y={stop.y*7} width={20} height={20} fill="darkblue" />)}
        </Layer>
      </Stage>
    )
  }
}
