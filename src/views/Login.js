import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handlePreLoginData, handlePostLoginData } from '../actions/shared';
import SessionService from '../services/sessionService';

import './Login.css';
import logo from '../images/logo.svg';
import blankAvatar from '../images/blank-avatar.svg';
import Spinner from '../components/Spinner';

class Login extends Component {

  state = {
    selectedUsername: '',
    isAuthenticating: false,
    isAutoLoggingOn: false
  };

  async componentDidMount() {

    const sessionUsername = SessionService.getAuthenticatedUsername();

    if (sessionUsername) {
      this.setState({ isAutoLoggingOn: true });
      await this.props.dispatch(handlePreLoginData());
      this.postLoginSteps(sessionUsername);
    } else {

      await this.props.dispatch(handlePreLoginData());

      // Use the first user as the default selected username
      const firstUsername = Object.keys(this.props.users)[0];
      this.setState({ selectedUsername: firstUsername });
    }
  }

  handleUserSelectionChange = (event) => {
    this.setState({ selectedUsername: event.target.value });
  };

  handleLogin = async () => {
    if (this.state.isAuthenticating) {
      return; // Ignore any additional login button clicks
    }

    this.setState({ isAuthenticating: true });

    this.postLoginSteps(this.state.selectedUsername);
  };

  postLoginSteps = async (username) => {

    // Set the username in state, retrieve the questions and also add to state
    await this.props.dispatch(handlePostLoginData(username));

    // Set the username in session storage so if a user reloads the page or navigates
    // to another URL, we don't force them to login again.
    SessionService.setAuthenticatedUsername(username);

    // Attempt to redirect the user back to the originally requested page
    const redirectUrl = this.props.location.state
      ? this.props.location.state.from
      : '/';

    this.props.history.push(redirectUrl);
  };

  render() {
    return(
      <div className="login__container">

        <img src={logo} width="240" height="22" alt="Would You Rather?" className="login__logo" />


        {this.state.isAutoLoggingOn &&
          <div>
            <h1 className="login__heading">Retrieving data&hellip; Please wait.</h1>
            <Spinner />
          </div>
        }


        {!this.state.isAutoLoggingOn &&
          <div>

            <img src={blankAvatar} width="78" height="78" alt="" className="login__avatar" />

            <h1 className="login__heading">Login to your account</h1>

            <label htmlFor="userSelection" className="login__label text-light">Select a user below</label>

            {this.props.userCount === 0 ? (
              <Spinner />
            ) : (
              <div>

                <select id="userSelection"
                        autoFocus
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
        }


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
