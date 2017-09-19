/* eslint-disable no-use-before-define */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import { sessionSelector } from '../../state/selectors';
import { SessionCard } from '../sessionCard/sessionCard';


export class HomeHero extends Component {
  render() {
    const cards = [];
    for (let [index, session] of this.props.sessions.entries()) {
        cards.push(<SessionCard key={ index } session={session} />);
    }
    return (
      <div className='homeHero' style={ styles.homeHero } >
        <Carousel
          slidesToShow={ 4 }
          >
          {cards}
        </Carousel>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    sessions: sessionSelector(state)
  };
};

const styles = {
  homeHero: {
    backgroundColor: '#2c3e50',
    display: 'flex',
    flex: 3,
    minHeight: '225px'
    }
};

export default connect(mapStateToProps, null)(HomeHero);
