import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Canvas from './components/canvas/canvas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Canvas>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Canvas>
      </div>
    );
  }
}

export default App;
