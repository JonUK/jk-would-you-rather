import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

function Spinner(props) {
  let className = 'spinner';

  if (props.isInline) {
    className += ' spinner--inline';
  }

  return (
    <div className={className} aria-label="Loading. Please wait."></div>
  );
}

Spinner.propTypes = {
  isInline: PropTypes.bool
};

export default Spinner;
