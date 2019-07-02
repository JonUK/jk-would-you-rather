import React, { Component } from 'react';

import Login from './views/Login';

import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import Home from './views/Home';
import AddQuestion from './views/AddQuestion';
import LeaderBoard from './views/Leaderboard';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>

        <div>

          <Route exact path='/' component={Login} />

          <Route exact path="/home" render={() => <AuthenticatedLayout><Home /></AuthenticatedLayout>}/>
          <Route exact path="/add-question" render={() => <AuthenticatedLayout><AddQuestion /></AuthenticatedLayout>}/>
          <Route exact path="/leaderboard" render={() => <AuthenticatedLayout><LeaderBoard /></AuthenticatedLayout>}/>

        </div>

      </Router>
    );
  }
}

export default App;
