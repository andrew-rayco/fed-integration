import React from 'react'
import data from '../db.js'

const findPeeps = (hash) => {
  return hash;
}

function NameList() {
  return (
    <div className="name-list">
      <h3>{findPeeps(window.location.hash)}</h3>
    </div>
  )
};

export default NameList;
