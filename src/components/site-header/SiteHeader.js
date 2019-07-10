import React from 'react';
import { Link } from 'react-router-dom';

import './SiteHeader.css';
import HeaderAvatar from  './HeaderAvatar';
import logo from '../../images/logo.svg';

import HeaderLinks from './HeaderLinks';

function SiteHeader() {
  return (
    <header className="site-header">

      <Link to={'/questions'}>
        <img src={logo} width="240" height="22" alt="Would You Rather?" className="site-header__logo" />
      </Link>

      <HeaderLinks />

      <HeaderAvatar />

    </header>
  );
}

export default SiteHeader;
