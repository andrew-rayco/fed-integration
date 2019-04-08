import * as types from './actionTypes';

const data = '../../db.json';

export function receivePeople(json) {
  return {
    type: types.RECEIVE_PEOPLE,
    people: json
  };
}

export function fetchPeople() {
  return dispatch => {
    return fetch(data)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => dispatch(receivePeople(json)));
  };
}
