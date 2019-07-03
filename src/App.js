import React, { Component } from 'react';

import Login from './views/Login';

import SiteLayout from './layouts/SiteLayout';
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

          <Route exact path="/home" render={() => <SiteLayout><Home /></SiteLayout>}/>
          <Route exact path="/add-question" render={() => <SiteLayout><AddQuestion /></SiteLayout>}/>
          <Route exact path="/leaderboard" render={() => <SiteLayout><LeaderBoard /></SiteLayout>}/>

        </div>

      </Router>
    );
  }
}

export default App;
