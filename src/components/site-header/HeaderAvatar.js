import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './HeaderAvatar.css';

import AvatarImage from '../AvatarImage';

class HeaderAvatar extends Component {

  state = {
    showMenu: false
  };

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
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
            <Link to={'/'}>Logout</Link>
          </div>
        )}

      </div>
    );
  }
}

function mapStateToProps({ authenticatedUser, users }) {
  const user = users[authenticatedUser];

  return {
    user
  };
}

export default connect(mapStateToProps)(HeaderAvatar);
