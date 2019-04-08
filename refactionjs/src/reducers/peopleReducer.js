import initialState from './initialState';
import { RECEIVE_PEOPLE } from '../actions/actionTypes';

export default function people(state = initialState.people, action) {
  switch (action.type) {
    case RECEIVE_PEOPLE:
      const { people } = action.people;
      return Object.assign({}, state, { people });
    default:
      return state;
  };
}
