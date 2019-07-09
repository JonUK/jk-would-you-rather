import React from 'react';
import PropTypes from "prop-types";
import './QuestionSummary.css';

import AvatarImage from "./AvatarImage";

function QuestionSummary(props) {
  return (
    <article className="question-summary">

      <header className="question-summary__header">

        <div className="question-summary__heading">
          { props.user.name } asked...
          <b>would you rather?</b>
        </div>

        <AvatarImage avatarURL={props.user.avatarURL} />

      </header>

      <div className="question-summary__answer-container">
        <strong className="question-summary__answer-letter">A</strong>
        <span className="question-summary__question">
          { props.question.optionOne.text }</span>
      </div>

      <div className="question-summary__answer-container">
        <strong className="question-summary__answer-letter">B</strong>
        <span className="question-summary__question">
        { props.question.optionTwo.text }
        </span>
      </div>

      <footer className="question-summary__footer">
        <a href="#">View Poll</a>
      </footer>

    </article>
  );

}

QuestionSummary.propTypes = {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default QuestionSummary;
