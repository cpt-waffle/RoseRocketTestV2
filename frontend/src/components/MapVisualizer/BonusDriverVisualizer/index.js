import React from 'react'
import { Layer, Circle, Line } from 'react-konva'

const DriverVisualizer = ({bonusDriver, stops}) => {
  return (
    <Layer>
      {bonusDriver.xCordinate !== "-1" && <Circle x={bonusDriver.xCordinate*7} y={bonusDriver.yCordinate*7} width={20} height={20} fill="red" />}
    </Layer>
  )
}

export default DriverVisualizer