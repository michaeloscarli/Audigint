/* eslint-disable no-use-before-define */

import React, { Component } from 'react';
export default class HomeContent extends Component {
  render() {
    return (
      <div className='homeContent' style={ styles.homeHero } >
        <p>Put something in this area I guess.</p>
      </div>
    );
  }
}

const styles = {
  homeHero: {
    backgroundColor: '#7f8c8d',
    display: 'flex'
    }
};
