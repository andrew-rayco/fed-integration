import initialState from './initialState';
import { RECEIVE_PEOPLE } from '../actions/actionTypes';

export default function people(state = initialState.people, action) {
  switch (action.type) {
    case RECEIVE_PEOPLE:
      const { people, active } = action.people;
      return Object.assign({}, state, { people, active });
    default:
      return state;
  };
}
