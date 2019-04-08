import * as types from './actionTypes';

const data = '/db.json';

export function receivePeople(peopleData) {
  return {
    type: types.RECEIVE_PEOPLE,
    people: peopleData
  };
}

export function fetchPeople(id) {
  return dispatch => {
    return fetch(data)
    .then(response => {
      return response.json().then(people => {
        let chosenPeople;
        switch (id) {
          case 'male':
          case 'female':
            chosenPeople = people.filter(person => person.gender === id);
            return chosenPeople;
            break;
          case 'over30':
          case 'under30':
            chosenPeople = people.filter(person => {
              if (id === 'over30') {
                return person.age >= 30;
              } else {
                return person.age < 30;
              };
            })
            return chosenPeople;
            break;
          default:
            chosenPeople = people;
            return chosenPeople;
        };

        return {
          people: chosenPeople,
          status: response.status
        }
      })
    })
    .then(result => dispatch(receivePeople(result)))
  };
}
