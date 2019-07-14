import React from 'react';
import PropTypes from 'prop-types';
import './ProgresBar.css';

function ProgressBar(props) {

  const cssWidth = props.percent + '%';

  return (
    <div className={`progress-bar__background ${props.className}`}>
      <div style={{ width: cssWidth }} className="progress-bar__foreground">
        { cssWidth }
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired
};

export default ProgressBar;
