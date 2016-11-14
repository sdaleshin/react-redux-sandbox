import * as types from '../constants/ActionTypes';

export function getAllFlights() {
  return (dispatch) => {
    dispatch({
      type: types.REQUEST_ALL_FLIGHTS
    });
    fetch('data.json').then(
        response => {
          response.json().then(function(data) {
            dispatch({
              type: types.RECEIVE_ALL_FLIGHTS,
              allFlights: data.flights
            })
          });

        });
  }
}

export function setCarrierFilter(carrier){
  return { type: types.SET_CARRIER_FILTER, carrier}
}

