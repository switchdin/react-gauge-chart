import React, { Component } from 'react';
import './App.css';
import GaugeChart from './components/GaugeChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GaugeChart />
        </header>
      </div>
    );
  }
}

export default App;
