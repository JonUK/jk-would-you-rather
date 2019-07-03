import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleLoginData } from '../actions/shared';

import './Login.css';
import logo from '../images/logo.svg';
import blankAvatar from '../images/blank-avatar.svg';
import Spinner from '../components/Spinner';

class Login extends Component {

  componentDidMount() {
    this.props.dispatch(handleLoginData());
  }

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

        {this.props.userCount === 0 ? (
          <Spinner />
        ) : (
          <div>

            <select id="userSelection">
              {Object.keys(this.props.users).map(key => (
                <option key={key} value={key}>{ this.props.users[key].name }</option>
              ))}
            </select>

            <br />

            <button onClick={this.handleLogin}>Login</button>

          </div>
        )}

      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userCount: Object.keys(users).length,
    users: users
  };
}


export default withRouter(connect(mapStateToProps)(Login));

