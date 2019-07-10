import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handlePreLoginData, handlePostLoginData } from '../actions/shared';

import './Login.css';
import logo from '../images/logo.svg';
import blankAvatar from '../images/blank-avatar.svg';
import Spinner from '../components/Spinner';

class Login extends Component {

  state = {
    selectedUsername: '',
    isAuthenticating: false
  };

  async componentDidMount() {
    await this.props.dispatch(handlePreLoginData());

    // Use the first user as the default selected username
    const firstUsername = Object.keys(this.props.users)[0];
    this.setState({ selectedUsername: firstUsername });
  }

  handleUserSelectionChange = (event) => {
    this.setState({ selectedUsername: event.target.value });
  };

  handleLogin = async () => {
    if (this.state.isAuthenticating) {
      return; // Ignore any additional login button clicks
    }

    this.setState({ isAuthenticating: true });

    // Set the username in state, retrieve the questions and also add to state
    await this.props.dispatch(handlePostLoginData(this.state.selectedUsername));
    this.props.history.push('/questions');
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

            <select id="userSelection"
                    value={this.state.selectedUsername}
                    onChange={this.handleUserSelectionChange}>
              {Object.keys(this.props.users).map(key => (
                <option key={key} value={key}>{ this.props.users[key].name }</option>
              ))}
            </select>

            <br />

            <button onClick={this.handleLogin} className="button--primary">

              {this.state.isAuthenticating ? (
                <Spinner isInline={true}/>
              ) : (
                <span>Login</span>
              )}
            </button>

          </div>
        )}

      </div>
    );
  }
}

function mapStateToProps({ users }) {

  const usersObjectKeys = Object.keys(users);

  return {
    userCount: usersObjectKeys.length,
    users: users
  };
}

export default withRouter(connect(mapStateToProps)(Login));
