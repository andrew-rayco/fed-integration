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

  activeClass(name) {
    const { active } = this.props;
    if (active === name) {
      return 'active'
    };
  }

  render() {
    return (
      <div className="header" onClick={(e) => this.handleClick(e)}>
        <h1 data-nav="everyone">People</h1>
        <ul className="nav">
          <li data-nav="everyone" className={this.activeClass('everyone')}>Everyone</li>
          <li data-nav="male" className={this.activeClass('male')}>Male</li>
          <li data-nav="female" className={this.activeClass('female')}>Female</li>
          <li data-nav="over30" className={this.activeClass('over30')}>Over 30</li>
          <li data-nav="under30" className={this.activeClass('under30')}>Under 30</li>
        </ul>
      </div>
    )
  }
};

Header.propTypes = {
  peopleActions: PropTypes.object,
  active: PropTypes.string
};

function mapStateToProps(state) {
  return {
    active: state.people.active
  }
}

function mapDispatchToProps(dispatch) {
  return {
    peopleActions: bindActionCreators(peopleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
