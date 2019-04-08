import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';

import Header from './Header';
import NameList from './NameList';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" component={NameList} />
        </div>
      </Router>
    )
  }
};

export default App;
