import React from 'react'

const buttonStyle = "b bn center db h2 sans-serif sky-blue white w4-ns"

const Title = () => (
  <div className="pa2 sky-blue tc">
    <span className="b f3 sans-serif white">
      <i className="fas fa-map-marker-alt white pr2"></i>
      Bonus Driver Control
    </span>
  </div>
)



const BonusDriverLocationControl = ({onSubmit}) => {
  return (
    <div className="bg-white mt5">
      <Title/>
      <form className="pb4 ph6" onSubmit={onSubmit}>
        <div className="db">
          X:<input name="xCordinate" type="number" min="0" max="200" />
        </div>
        <div className="db">
          Y:<input name="yCordinate" type="number" min="0" max="200" />
        </div>
        <button className={buttonStyle}>Submit</button>
      </form>
    </div>
  )
}

export default BonusDriverLocationControl

