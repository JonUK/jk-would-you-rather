import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Both answers are displayed but the user can't answer the question
 * @constructor
 */
function SummaryContent(props) {

  return (
    <div>
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
    </div>
  )

}

SummaryContent.propTypes = {
  question: PropTypes.object.isRequired
};

export default SummaryContent;
