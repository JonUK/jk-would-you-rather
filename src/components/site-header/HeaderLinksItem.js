import React from 'react';
import { NavLink } from 'react-router-dom';

import './HeaderLinksItem.css';
import PropTypes from "prop-types";

function HeaderLinksItem(props) {
  return (
    <li className="header-links-item">
      <NavLink to={props.path} className="header-links-item__link" activeClassName="header-links-item__link--active">
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
