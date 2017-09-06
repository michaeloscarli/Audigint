/* eslint-disable no-use-before-define */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sessionSelector } from '../../state/selectors';

export class HomeHero extends Component {
  render() {
    console.log('HomeHero has received new props', this.props.sessions);
    return (
      <div className='homeHero' style={ styles.homeHero } >
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state);
  return {
    sessions: sessionSelector(state)
  };
};

const styles = {
  homeHero: {
    backgroundColor: '#2c3e50',
    display: 'flex',
    height: '250px'
    }
};

export default connect(mapStateToProps, null)(HomeHero);
