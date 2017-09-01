import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Canvas from './components/canvas/canvas';
import HomeHero from './components/homeHero/homeHero';
import HomeContent from './components/homeContent/homeContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Canvas>
          <HomeHero/>
          <HomeContent/>
        </Canvas>
      </div>
    );
  }
}

export default App;
