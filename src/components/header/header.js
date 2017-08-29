import React, { Component } from 'react';
import strings from '../../strings/strings.json'
class Header extends Component {
  render() {
    return (
      <div style={ styles.appHeader } >
        <h3 style={ styles.headerText }>
          <a href='/'> { strings.audigint } </a>
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

export default Header;
