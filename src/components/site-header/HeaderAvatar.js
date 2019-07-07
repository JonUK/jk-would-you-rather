import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './HeaderAvatar.css';

class HeaderAvatar extends Component {

  state = {
    showMenu: false
  };

  toggleShowMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {

    const srcSet = this.props.user.avatarURL + '.png, ' + this.props.user.avatarURL + '@2x.png 2x';

    return (
      <div className="header-avatar">

        <button className="header-avatar__button" onClick={this.toggleShowMenu}>

          <img
            src={this.props.user.avatarURL + '.png'}
            srcSet={srcSet}
            width="46"
            height="46"
            className="header-avatar__image"
            alt="" />

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

  // debugger;

  const user = users[authenticatedUser];

  return {
    user
  };
}

export default connect(mapStateToProps)(HeaderAvatar);
