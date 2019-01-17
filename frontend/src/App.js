import React, { Component } from 'react';
import MapVisualizer from './components/MapVisualizer'
import axios from 'axios';

const getDriverRoute = 'http://localhost:3001/driver'
const getLegsRoute = 'http://localhost:3001/legs'
const getStopsRoute = 'http://localhost:3001/stops'

class App extends Component {
  state = {
    driver: {},
    legs: [],
    stops: []
  }

  async getDriver() {
    axios.get(getDriverRoute).then(res => {
      this.setState({ driver: res.data.driver });
    })
  }

  async getLegs() {
    axios.get(getLegsRoute).then(res => {
      this.setState({ legs: res.data.legs });
    })
  }

  async getStops() {
    axios.get(getStopsRoute).then(res => {
      this.setState({ stops: res.data.stops });
    })
  }

  componentDidMount() {
    this.getDriver();
    this.getStops();
    this.getLegs();
  }

  render() {
    console.log(this.state.driver)
    return (
      <div>
        <MapVisualizer store={this.state} />
      </div>
    );
  }
}

export default App;
