import React from 'react'
import Select from 'react-select';

const buttonStyle = "b bn center db h2 sans-serif sky-blue white w4-ns"

const Title = () => (
  <div className="pa2 sky-blue tc">
    <span className="b f3 sans-serif white">
      <i className="fas fa-truck white pr2"></i>
      Driver Control
    </span>
  </div>
)



const DriverLocationControl = ({currentLegID, driver, legs, onChange, onSubmit}) => {
  return (
    <div className="bg-white mt5">
      <Title/>
      <form className="pb4 ph6" onSubmit={onSubmit}>
        <div className="pt4">
          <Select
            onChange={onChange}
            options = {legs.map( leg => { return { label: leg.legID, value: leg.legID } })}
            value={currentLegID}
          />
        </div>
        <input name="progress" type="number" min="0" max="100" />
        <button className={buttonStyle}>Submit</button>
      </form>
    </div>
  )
}

export default DriverLocationControl

