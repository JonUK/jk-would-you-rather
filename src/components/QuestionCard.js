import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import './QuestionCard.css';

import AvatarImage from "./AvatarImage";

function QuestionCard(props) {
  return (
    <article className="question-card">

      <header className="question-card__header">

        <div className="question-card__heading">
          { props.user.name } asked<span>&hellip; </span>
          <b>would you rather?</b>
        </div>

        <AvatarImage avatarURL={props.user.avatarURL} />

      </header>

      <div className="question-card__answer-container">
        <strong className="question-card__answer-letter">A</strong>
        <span className="question-card__question">
          { props.question.optionOne.text }</span>
      </div>

      <div className="question-card__answer-container">
        <strong className="question-card__answer-letter">B</strong>
        <span className="question-card__question">
        { props.question.optionTwo.text }
        </span>
      </div>

      <footer className="question-card__footer">
        <Link to={'/questions/' + props.question.id}>View Poll</Link>
      </footer>

    </article>
  );

}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default QuestionCard;
