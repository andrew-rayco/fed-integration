import * as types from './actionTypes';
import * as helpers from '../js/helpers/helpers';

const data = '/db.json';

export function receivePeople(peopleData) {
  return {
    type: types.RECEIVE_PEOPLE,
    people: peopleData
  };
}

export function fetchPeople(id='everyone') {
  return dispatch => {
    return fetch(data)
    .then(response => {
      return response.json().then(people => {
        const chosenPeople = helpers.getSelectedPeople(people, id);
        return {
          people: chosenPeople,
          status: response.status
        }
      })
    })
    .then(result => dispatch(receivePeople(result)))
  };
}
