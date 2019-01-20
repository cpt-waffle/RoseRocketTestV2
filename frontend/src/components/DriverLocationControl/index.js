import React from 'react'
import Select from 'react-select'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const buttonStyle = "b bn center db h2 mt3 sans-serif sky-blue white w4-ns"

const Title = () => (
  <div className="pa2 sky-blue tc">
    <span className="b f3 white">
      <i className="fas fa-truck white pr2"></i>
      Driver Control
    </span>
  </div>
)

const onSliderChange = (value) => console.log(value)


const DriverLocationControl = ({currentLegID, currentProgress, driver, legs, onChange, onCurrentProgressChange, onSubmit}) => {
  return (
    <div className="bg-white mt5 sans-serif">
      <Title/>
      <form className="pb4 ph6" onSubmit={onSubmit}>
        <div className="mt3">
          <span>Choose Leg</span>
          <Select
            className="black"
            onChange={onChange}
            options = {legs.map( leg => { return { label: leg.legID, value: leg.legID } })}
            value={currentLegID}
          />
        </div>
        <div className="mt2">
          <span className="db m0">Choose Progress</span>
          <Slider min={0} max={100} value={parseInt(currentProgress)} onChange={ value => onCurrentProgressChange(value) }/>
        </div>
        <button className={buttonStyle}>Submit</button>
      </form>
    </div>
  )
}

export default DriverLocationControl

