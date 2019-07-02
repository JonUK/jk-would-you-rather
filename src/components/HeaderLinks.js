import React from 'react';
import { Link } from 'react-router-dom';

function HeaderLinks() {
  return (
    <div>
      <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/add-question'}>Add Question</Link></li>
        <li><Link to={'/leaderboard'}>Leaderboard</Link></li>
        <li><Link to={'/'}>Login</Link></li>
      </ul>
    </div>
  );
}

export default HeaderLinks;
