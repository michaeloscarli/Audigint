/* eslint-disable no-use-before-define */

import React, { Component } from 'react';
import strings from '../../strings/strings.json';
import { fetchData } from '../../state/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
export class Header extends Component {
  render() {
    return (
      <div className='appHeader' style={ styles.appHeader } >
        <h3 style={ styles.headerText }>
          <a onClick={ this.props.fetchData } > { strings.audigint } </a>
        </h3>
        <div style={ styles.navigation }>
          <h3 style={ styles.navigationLink }/>
            <a href='/'> { strings.messages } </a>
          <h3 style={ styles.navigationLink }/>
            <a href='/'> { strings.notifications } </a>
          <h3 style={ styles.navigationLink } />
            <a href='/'> { strings.my_account } </a>
        </div>
      </div>
    );
  }


}

const styles = {
  appHeader: {
    backgroundColor: '#222',
    height: '60px',
    padding: '5px',
    color: 'white',
    display: 'flex'
    },
  headerText: {
    marginLeft: '20px',
    display: 'flex',
    alignSelf: 'flex-start',
    flex: 3
  },
  navigation: {
    marginRight: '20px',
    display: 'flex',
    alignSelf: 'flex-end',
    flex: 1
  },
  navigationLink: {
    flex: 1,
    fontSize: '20px'
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchData }, dispatch);

export default connect(null, mapDispatchToProps)(Header);
