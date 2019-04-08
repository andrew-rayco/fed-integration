import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(e) {
    console.log(e.target)
  }

  render() {
    return (
      <div className="header" onClick={(e) => this.handleClick(e)}>
        <h1>People</h1>
        <ul>
          <li>Everyone</li>
          <li>Male</li>
          <li>Female</li>
          <li>Over 30</li>
          <li>Under 30</li>
        </ul>
      </div>
    )
  }
};

export default Header;
