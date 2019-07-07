import React from 'react';
import './HeaderLinks.css';

import HeaderLinksItem from './HeaderLinksItem';

function HeaderLinks() {
  return (
    <div className="header-links">
      <ul className="header-links__list">

        <HeaderLinksItem path={'/home'} text="Home"/>
        <HeaderLinksItem path={'/add-question'} text="Add Question"/>
        <HeaderLinksItem path={'/leaderboard'} text="Leaderboard"/>

        {/*<li className="header-links__item">*/}
          {/*<NavLink to={'/'} className="header-links__link">Login</NavLink>*/}
        {/*</li>*/}

      </ul>
    </div>
  );
}

export default HeaderLinks;
