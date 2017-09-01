/* eslint-disable no-use-before-define */

import React, { Component } from 'react';
export default class HomeHero extends Component {
  render() {
    return (
      <div className='homeHero' style={ styles.homeHero } >
      </div>
    );
  }
}

const styles = {
  homeHero: {
    backgroundColor: '#2c3e50',
    display: 'flex',
    height: '250px'
    }
};
