import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './Header'
import NameList from './NameList'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" component={NameList} />
          <Route exact path="/male" component={NameList} />
          <Route exact path="/female" component={NameList} />
          <Route exact path="/over30" component={NameList} />
          <Route exact path="/under30" component={NameList} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
