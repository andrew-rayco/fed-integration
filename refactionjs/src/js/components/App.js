import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import NameList from './NameList';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <NameList />
      </div>
    )
  }
};

export default App;
