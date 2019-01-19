import React from 'react'
import Select from 'react-select';


const DriverLocationControl = ({currentLegID, driver, legs, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <Select
        onChange={onChange}
        options = {legs.map( leg => { return { label: leg.legID, value: leg.legID } })}
        value={currentLegID}
      />
      <input name="progress" type="number" min="0" max="100" />
      <button>Submit</button>
    </form>
  )
}

export default DriverLocationControl

