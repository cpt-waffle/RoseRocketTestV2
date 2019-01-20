import React from 'react'

const buttonStyle = "b bn center db h2 mt3 sans-serif sky-blue white w4-ns"

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
    <div className="bg-white mt4">
      <Title/>
      <form className="mt3 pb4 ph6" onSubmit={onSubmit}>
        <div className="db">
          <span>Choose X Cordinate</span>
          <input className="ba br2 b--light-silver h2 pl2 w-100" name="xCordinate" type="number" min="0" max="200" />
        </div>
        <div className="db mt2">
          <span>Choose Y Cordinate</span>
          <input className="ba br2 b--light-silver h2 pl2 w-100" name="yCordinate" type="number" min="0" max="200" />
        </div>
        <button className={buttonStyle}>Submit</button>
      </form>
    </div>
  )
}

export default BonusDriverLocationControl

