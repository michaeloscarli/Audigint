import * as ActionTypes from './action-types';
import { mockSessions } from '../mocks/mocks';


const initialState = {
  sessions: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_DATA: {
      return {
        sessions: mockSessions
      }
    }
    case ActionTypes.RECEIVED_DATA: {
      return {
        sessions: mockSessions
      }
    }
    default:
      return state;
  }
}
