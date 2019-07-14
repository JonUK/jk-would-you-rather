import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderLinksItem.css';
import PropTypes from "prop-types";

function HeaderLinksItem(props) {

  const isActive = (match, location) => {

    if (!match) {
      return false;
    }

    if (match.isExact) {
      return true;
    }

    // --------------------------------------------------------------------------------
    // If the location is a match but not an exact match and the path starts with
    // '/questions' then the root '/' route has been matched and a user is on the
    // details page for a single question. Still consider the root route active.
    // --------------------------------------------------------------------------------
    if (match.isExact === false && location.pathname.startsWith('/questions')) {
      return true;
    }

    return false;
  };

  return (
    <li className="header-links-item">

      <NavLink to={props.path}
               isActive={isActive}
               className="header-links-item__link"
               activeClassName="header-links-item__link--active">
        {props.text}
      </NavLink>
    </li>
  );
}

HeaderLinksItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default HeaderLinksItem;
