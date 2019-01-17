import React, { Component } from 'react';
import MapVisualizer from './components/MapVisualizer'
import axios from 'axios';


const getLegsRoute = 'http://localhost:3001/legs'
const getStopsRoute = 'http://localhost:3001/stops'

class App extends Component {
  state = {
    driver: {},
    legs: [],
    stops: []
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
    this.getStops();
    this.getLegs();
  }

  render() {
    return (
      <div>
      test
        <MapVisualizer store={this.state} />
      </div>
    );
  }
}

export default App;
