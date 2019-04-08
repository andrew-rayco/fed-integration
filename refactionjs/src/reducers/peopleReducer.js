import initialState from './initialState';
import { FETCH_PEOPLE, RECEIVE_PEOPLE } from '../actions/actionTypes';

export default function people(state = initialState.people, action) {
  let newState;
  switch (action.type) {
    case FETCH_PEOPLE:
      console.log('FETCH_PEOPLE Action');
      return action;
    case RECEIVE_PEOPLE:
      newState = action.people;
      console.log('RECEIVE_PEOPLE Action');
      return newState;
    default:
      return state;
  };
}
