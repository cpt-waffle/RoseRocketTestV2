import React, { Component } from 'react'
import DriverLocationControl from './components/DriverLocationControl'
import MapVisualizer from './components/MapVisualizer'
import axios from 'axios';

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
    currentLegID: {},
    driver: {},
    legs: [],
    stops: []
  }

  getDriver = () => {
    axios.get(getDriverRoute).then(res => {
      const { driver } = res.data
      const currentLegID = { label: driver.activeLegID, value: driver.activeLegID }
      this.setState({ driver: driver, currentLegID: currentLegID })
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
    this.setState({ currentLegID: selectedOption })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    const payload = { driverActiveLeg: this.state.currentLegID.value, legProgress: evt.target.progress.value }
    axios.put(getDriverRoute, payload ).then(res => {
      this.setState({ driver: res.data })
    })
  }

  componentDidMount() {
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
              driver={this.state.driver}
              legs={this.state.legs}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
            </div>
          </div>
          <div className="bg-white h48 overflow-scroll mt3 w-50">
            <MapVisualizer store={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
