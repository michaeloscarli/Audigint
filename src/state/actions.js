import * as ActionTypes from './action-types';

export function fetchData() {
  return async (dispatch) => {
    console.log('fetching data')
    dispatch({
      type: ActionTypes.FETCH_DATA
    })
  }
}
