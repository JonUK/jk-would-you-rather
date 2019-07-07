import React from 'react';
import SiteHeader from '../components/site-header/SiteHeader';

/**
 * Layout used on all pages other than the login screen. Contains site wide UI
 * components including the header and footer. When this layout is used, it's
 * required that a user is authenticated and the user details are in redux.
 * @constructor
 */
function SiteLayout({ children }) {
  return (
    <div>

      <SiteHeader />

      <main>
        {children}
      </main>

      <footer>Site Footer</footer>
    </div>
  );
}

export default SiteLayout;
