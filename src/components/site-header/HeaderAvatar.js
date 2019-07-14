import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SessionService from '../../services/sessionService';

import './HeaderAvatar.css';
import { clearAuthenticatedUsername } from '../../actions/authenticatedUser';


import AvatarImage from '../AvatarImage';

class HeaderAvatar extends Component {

  state = {
    showMenu: false
  };

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  logout = async () => {
    SessionService.clearAuthenticatedUsername();
    await this.props.dispatch(clearAuthenticatedUsername());
    this.props.history.push('/');
  };

  render() {

    return (
      <div className="header-avatar">

        <button className="header-avatar__button" onClick={this.toggleShowMenu}>

          <AvatarImage avatarURL={this.props.user.avatarURL} className="header-avatar__image" />

          <span className="header-avatar__name">
            { this.props.user.name }
          </span>
          <i className="header-avatar__down-arrow" aria-hidden="true" />
        </button>

        {this.state.showMenu && (
          <div className="header-avatar__menu">
            <button onClick={this.logout} className="button--primary">Logout</button>
          </div>
        )}

      </div>
    );
  }
}

function mapStateToProps({ authenticatedUser, users }) {
  return {
    user: users[authenticatedUser]
  };
}

export default withRouter(connect(mapStateToProps)(HeaderAvatar));
