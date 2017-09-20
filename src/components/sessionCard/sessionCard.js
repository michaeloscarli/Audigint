import React from 'react';
import strings from '../../strings/strings.json';
import { fetchData } from '../../state/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export function SessionCard(props) {
  console.log(props);
  const { date, link, location, role, time, title } = props.session;

  return (
    <div className='sessionCard' style={ styles.sessionCard }>
      <div style={ styles.cardHeader }>
        <p style={ styles.cardTitle }> { title } </p>
      </div>
      <div style={ styles.sectionDivider }/>
      <div style={ styles.cardContent }>
        <div style={ styles.timeSection}>
          <p style={ styles.cardText }> { date } </p>
          <p style={ styles.cardText }> { time } </p>
        </div>
        <div style={ styles.locationSection }>
          <p style={ styles.cardText }> { location } </p>
        </div>
        <div style={ styles.roleSection }>
          <p style={ styles.cardText }> { role } </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  sessionCard: {
    backgroundColor: 'white',
    display: 'flex',
    height: 175,
    flex: 1,
    flexDirection: 'column',
    borderRadius: '3px',
    borderWidth: '2px',
    marginLeft: '25px',
    marginRight: '25px'
  },
  cardHeader: {
    display: 'flex',
    flex: 1,
  },
  sectionDivider: {
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
  },
  cardTitle: {
    margin: 0,
    flex: 1,
    alignSelf: 'center'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flex: 4,
  },
  timeSection: {
    display: 'flex',
    flex: 1,
  },
  locationSection: {
    display: 'flex',
    flex: 1,
  },
  roleSection: {
    display: 'flex',
    flex: 1,
  },
  cardText: {
    margin: 0,
    alignSelf: 'center',
    marginLeft: '20px'
  }
};
