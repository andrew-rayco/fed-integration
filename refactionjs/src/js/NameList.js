import React from 'react'
import data from '../db.js'

const renderFindPeeps = (hash) => {
  const newHash = hash.split('/')[1]
  switch(newHash) {
    case 'male':
      return 'blokes';
      break;
    case 'female':
      return 'chicks';
      break;
    case 'over30':
      return 'old'
    default:
      return 'all';
  }
  return newHash;
}

class NameList extends React.Component {

  render() {
    return (
      <div className="name-list">
        <ul>
          { renderFindPeeps(window.location.hash) }
        </ul>
      </div>
    )
  }
};

export default NameList;
