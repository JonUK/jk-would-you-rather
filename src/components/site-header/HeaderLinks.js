import React from 'react';
import './HeaderLinks.css';

import HeaderLinksItem from './HeaderLinksItem';

function HeaderLinks() {
  return (
    <div className="header-links">
      <ul className="header-links__list">

        <HeaderLinksItem path={'/'} text="Questions"/>
        <HeaderLinksItem path={'/add'} text="Add Question"/>
        <HeaderLinksItem path={'/leaderboard'} text="Leaderboard"/>

      </ul>
    </div>
  );
}

export default HeaderLinks;
