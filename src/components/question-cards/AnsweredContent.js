import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from '../ProgressBar';
import './AnsweredContent.css';

/**
 * Both answers are displayed but the user can't answer the question
 * @constructor
 */
function AnsweredContent(props) {
  const optionOneVotes = props.question.optionOne.votes.length;
  const optionTwoVotes = props.question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  let optionOnePercent = (100 / totalVotes) * optionOneVotes;
  optionOnePercent = Math.round(optionOnePercent * 10) / 10; // Round to 1.d.p

  const optionTwoPercent = 100 - optionOnePercent;

  return (
    <div>

      <div className="answered-content__progress-container">
        <strong className="question-card__answer-letter">A</strong>
        <div className="answered-content__progress">
          <ProgressBar percent={optionOnePercent} />
          {optionOneVotes} of {totalVotes} votes
        </div>
      </div>

      <div className="answered-content__progress-container">
        <strong className="question-card__answer-letter">B</strong>
        <div className="answered-content__progress">
          <ProgressBar percent={optionTwoPercent} />
          {optionTwoVotes} of {totalVotes} votes
        </div>
      </div>

      <footer className="answered-content__footer">
        You answered with option
        <span className="text-large">
          {props.answeredOptionOne ? ' A' : ' B'}
        </span>
      </footer>

    </div>
  );
}

AnsweredContent.propTypes = {
  question: PropTypes.object.isRequired
};

function mapStateToProps({ authenticatedUser }, { question }) {
  const answeredOptionOne = question.optionOne.votes.includes(authenticatedUser);

  return {
    answeredOptionOne
  };
}

export default connect(mapStateToProps)(AnsweredContent);
