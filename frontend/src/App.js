import React, { Component } from 'react'
import DriverStatus from './components/DriverStatus'
import DriverLocationControl from './components/DriverLocationControl'
import BonusDriverLocationControl from './components/BonusDriverLocationControl'
import MapVisualizer from './components/MapVisualizer'
import axios from 'axios';

const getBonusDriverRoute = 'http://localhost:3001/bonusDriver'
const getDriverRoute = 'http://localhost:3001/driver'
const getLegsRoute = 'http://localhost:3001/legs'
const getStopsRoute = 'http://localhost:3001/stops'

const Title = () => (
  <div className="pa2 sky-blue tc">
    <span className="b f2 sans-serif white">
      <i className="fas fa-rocket white pr2"></i>
      RoseRocket Driver Location Test
    </span>
  </div>
)


class App extends Component {
  state = {
    bonusDriver: {},
    currentLegID: {},
    currentProgress: 0,
    driver: {},
    legs: [],
    stops: [],
    zoom: 7
  }

  getBonusDriver = () => {
    axios.get(getBonusDriverRoute).then(res => {
      this.setState({ bonusDriver: res.data })
    })
  }

  getDriver = () => {
    axios.get(getDriverRoute).then(res => {
      const { driver } = res.data
      const currentLegID = { label: driver.activeLegID, value: driver.activeLegID }
      this.setState({ driver: driver, currentLegID: currentLegID, currentProgress: driver.legProgress })
    })
  }

  getLegs = () => {
    axios.get(getLegsRoute).then(res => {
      this.setState({ legs: res.data.legs })
    })
  }

  getStops = () => {
    axios.get(getStopsRoute).then(res => {
      this.setState({ stops: res.data.stops })
    })
  }

  onChange = (selectedOption) => {
    this.setState({ currentLegID: selectedOption, currentProgress: 0 })
  }

  onBonusDriverSubmit = evt => {
    evt.preventDefault()
    const payload = { xCordinate: evt.target.xCordinate.value, yCordinate: evt.target.yCordinate.value }
    axios.put(getBonusDriverRoute, payload ).then(res => {
      this.setState({ bonusDriver: res.data })
    })
  }

  onCurrentProgressChange = value => this.setState({ currentProgress: value})

  onSubmit = evt => {
    evt.preventDefault()
    const payload = { driverActiveLeg: this.state.currentLegID.value, legProgress: this.state.currentProgress }
    axios.put(getDriverRoute, payload ).then(res => {
      this.setState({ driver: res.data })
    })
  }

  zoomIn = () => this.setState({ zoom: this.state.zoom + 1 })

  zoomOut = () => this.setState({ zoom: this.state.zoom - 1 })

  componentDidMount() {
    this.getBonusDriver()
    this.getDriver()
    this.getStops()
    this.getLegs()
  }

  render() {
    return (
      <div className="bg-light-gray">
        <Title/>
        <div className="flex">
          <div className="w-50">
            <div className="w-50 center">
            <DriverLocationControl
              currentLegID={this.state.currentLegID}
              currentProgress={this.state.currentProgress}
              driver={this.state.driver}
              legs={this.state.legs}
              onChange={this.onChange}
              onCurrentProgressChange={this.onCurrentProgressChange}
              onSubmit={this.onSubmit}
            />
            <BonusDriverLocationControl onSubmit={this.onBonusDriverSubmit}/>
            </div>
          </div>
          <div className="di mr4 w-50">
            <div className="bg-white h48 mt3 overflow-scroll">
              <MapVisualizer store={this.state} />
            </div>
            {Object.keys(this.state.legs).length > 0 && <DriverStatus store={this.state} zoomIn={this.zoomIn} zoomOut={this.zoomOut}/>}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
