import React, { Component } from 'react';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';

import Login from './components/Login';

import Home from './components/Home';
import AddQuestion from './components/AddQuestion';
import LeaderBoard from './components/Leaderboard';

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

          <Route path="/home" render={() => <AuthenticatedLayout><Home /></AuthenticatedLayout>}/>
          <Route path="/add-question" render={() => <AuthenticatedLayout><AddQuestion /></AuthenticatedLayout>}/>
          <Route path="/leaderboard" render={() => <AuthenticatedLayout><LeaderBoard /></AuthenticatedLayout>}/>

        </div>

      </Router>
    );
  }
}

export default App;

// --------------------------------------------------------------------------------




// import React from 'react';
// import logo from './images/logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
