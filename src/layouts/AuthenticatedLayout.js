import React from 'react';
import HeaderLinks from '../components/HeaderLinks';

/**
 * Layout used on all pages other than the login screen. Contains site wide UI
 * components including the header and footer. When this layout is used, it's
 * required that a user is authenticated and the user details are in redux.
 * @constructor
 */
function AuthenticatedLayout({ children }) {
  return (
    <div>

      <header>

        <h1>Site Header</h1>
        <HeaderLinks />

      </header>

      {children}

      <footer>Site Footer</footer>
    </div>
  );
}

export default AuthenticatedLayout;
