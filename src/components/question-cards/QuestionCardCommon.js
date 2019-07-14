import React from 'react';
import PropTypes from "prop-types";

import './QuestionCard.css';

import AvatarImage from "./../AvatarImage";

/**
 * This contains the common question card markup and uses containment / children
 * prop to render the appropriate content in the card.
 * @constructor
 */
function QuestionCardCommon(props) {
  return (
    <article className="panel">

      <header className="question-card__header">

        <div className="question-card__heading">
          { props.user.name } asked<span>&hellip; </span>
          <b>would you rather?</b>
        </div>

        <AvatarImage avatarURL={props.user.avatarURL} className="question-card__avatar" />

      </header>

      {props.children}

    </article>
  );
}

QuestionCardCommon.propTypes = {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default QuestionCardCommon;
