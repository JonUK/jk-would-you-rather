import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';
import logo from '../images/logo.svg';
import blankAvatar from '../images/blank-avatar.svg';

class Login extends Component {

  handleLogin = () => {
    this.props.history.push('/home');
  };

  render() {
    return(
      <div className="login__container">

        <img src={logo} width="240" height="22" alt="Would You Rather?" className="login__logo" />

        <img src={blankAvatar} width="78" height="78" alt="" className="login__avatar" />

        <h1 className="login__heading">Login to your account</h1>

        <label htmlFor="userSelection" className="login__label text-light">Select a user below</label>

        <select id="userSelection">
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          <option value="user3">User 3</option>
        </select>

        <br />

        <button onClick={this.handleLogin}>Login</button>

      </div>
    );
  }
}

export default withRouter(Login);

