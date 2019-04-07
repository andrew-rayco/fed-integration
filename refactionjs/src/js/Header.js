import React from 'react'
import { Link } from 'react-router-dom'

function Header (props) {
  return (
    <div className="header">
      <h1><Link to="/">People</Link></h1>
      <ul>
        <li><Link to="/">Everyone</Link></li>
        <li><Link to="/male">Male</Link></li>
        <li><Link to="/female">Female</Link></li>
        <li><Link to="/over30">Over 30</Link></li>
        <li><Link to="/under30">Under30</Link></li>
      </ul>
    </div>
  )
}

export default Header