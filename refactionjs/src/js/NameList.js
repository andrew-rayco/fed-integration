import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from '../actions/peopleActions';
import PropTypes from 'prop-types';

class NameList extends React.Component {
  componentDidMount() {
    this.props.peopleActions.fetchPeople();
  }

  render() {
    return (
      <div className="name-list">
        <ul>
        </ul>
      </div>
    )
  }
}

NameList.propTypes = {
  peopleActions: PropTypes.object,
  people: PropTypes.array
};

function mapStateToProps(state) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    peopleActions: bindActionCreators(peopleActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NameList);
