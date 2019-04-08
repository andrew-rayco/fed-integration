import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from '../../actions/peopleActions';
import PropTypes from 'prop-types';

class Header extends React.Component {
  handleClick(e) {
    const isClickable = e.target.getAttribute('data-nav');
    if (isClickable) {
      this.props.peopleActions.fetchPeople(isClickable);
    }
    return;
  }

  render() {
    return (
      <div className="header" onClick={(e) => this.handleClick(e)}>
        <h1 data-nav="everyone">People</h1>
        <ul>
          <li data-nav="everyone">Everyone</li>
          <li data-nav="male">Male</li>
          <li data-nav="female">Female</li>
          <li data-nav="over30">Over 30</li>
          <li data-nav="under30">Under 30</li>
        </ul>
      </div>
    )
  }
};

Header.propTypes = {
  peopleActions: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return {
    peopleActions: bindActionCreators(peopleActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Header);
