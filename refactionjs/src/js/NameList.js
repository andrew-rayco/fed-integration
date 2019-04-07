import React from 'react'
import data from '../db.js'

const findPeeps = (hash) => {
  const newHash = hash.split('/')[1]
  switch(newHash) {
    case 'male':
    case 'female':
      const peopleGender = data.filter((person) => {
        return person.gender === newHash
      });
      return renderPeeps(peopleGender);
      break;
    case 'over30':
    case 'under30':
      const peopleAge = data.filter((person) => {
        if (newHash === 'over30') {
          return person.age >= 30;
        } else {
          return person.age < 30;
        };
      })
      return renderPeeps(peopleAge);
      break;
    default:
      return renderPeeps(data);
  }
  return newHash;
}

const renderPeeps = (people) => {
  let selectedPeople = [];
  people.map((person) => {
    selectedPeople.push(<li className="person">{person.name} {person.age}</li>)
  });
  return selectedPeople;
}

class NameList extends React.Component {

  render() {
    return (
      <div className="name-list">
        <ul>
          { findPeeps(window.location.hash) }
        </ul>
      </div>
    )
  }
};

export default NameList;
