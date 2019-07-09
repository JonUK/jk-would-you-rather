import React from 'react';
import PropTypes from "prop-types";

function AvatarImage(props) {

  const src = props.avatarURL + '.png';
  const srcSet = src + ', ' + props.avatarURL + '@2x.png 2x';

  return (
    <img
      src={src}
      srcSet={srcSet}
      width="46"
      height="46"
      className={props.className}
      alt="" />
  );
}

AvatarImage.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default AvatarImage;
