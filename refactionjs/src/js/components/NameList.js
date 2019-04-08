import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as peopleActions from '../../actions/peopleActions';
import PropTypes from 'prop-types';

class NameList extends React.Component {
  componentDidMount() {
    const { fetchPeople } = this.props.peopleActions;
    fetchPeople();
  }

  renderPeople() {
    const { people } = this.props.people;
    let peopleList = [];
    if (people) {
      people.map(person =>
        peopleList.push(<li key={person._id}>{person.name} {person.age}</li>)
      );
    }
    return peopleList;
  }

  render() {
    return (
      <div className="name-list">
        <ul>
          { this.renderPeople() }
        </ul>
      </div>
    )
  }
}

NameList.propTypes = {
  peopleActions: PropTypes.object,
  people: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
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
