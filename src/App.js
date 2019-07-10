import React, { Component } from 'react';

import PrivateRoute from './PrivateRoute';
import Login from './views/Login';

import Questions from './views/Questions';
import AddQuestion from './views/AddQuestion';
import LeaderBoard from './views/Leaderboard';

import Question from './views/Question';

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

          <PrivateRoute exact path="/questions" component={Questions} />
          <PrivateRoute exact path="/add-question" component={AddQuestion} />
          <PrivateRoute exact path="/leaderboard" component={LeaderBoard} />

          <PrivateRoute path="/questions/:questionId" component={Question} />

        </div>

      </Router>
    );
  }
}

export default App;
