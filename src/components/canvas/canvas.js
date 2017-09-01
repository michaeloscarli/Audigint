/* eslint-disable no-use-before-define */

import React, { Component } from 'react';

export default class Canvas extends Component {
  props: {
    children: React.Element
  }
  render() {
    const { children } = this.props;
    return (
      <div className='canvas' style={styles.canvas}>
        { children }
      </div>
    );
  }
}

const styles = {
  canvas: {
    flex: 1,
    alignSelf: 'stretch'
  }
};
