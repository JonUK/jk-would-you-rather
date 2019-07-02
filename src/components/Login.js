import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  render() {
    return(
      <div>
        <h1>Login Component</h1>
        <Link to={'/home'}>Home</Link>
      </div>
    );
  }
}

export default Login;

