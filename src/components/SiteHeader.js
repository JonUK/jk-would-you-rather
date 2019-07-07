import React from 'react';

import './SiteHeader.css';
import logo from '../images/logo.svg';

import HeaderLinks from './HeaderLinks';

function SiteHeader() {
  return (
    <header className="site-header">

      <img src={logo} width="240" height="22" alt="Would You Rather?" className="site-header__logo" />

      <HeaderLinks />



    </header>
  );
}

export default SiteHeader;
