import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

import QuestionCardCommon from '../components/question-cards/QuestionCardCommon';
import UnansweredContent from '../components/question-cards/UnansweredContent';
import AnsweredContent from '../components/question-cards/AnsweredContent';

function Question(props) {

  const { question, user, isAnswered } = props;

  return (
    <div>

      {question === undefined ? (
        <div>
          <h1>Oops, the question wasn't found</h1>
          <NavLink to={'/'}>Return to the homepage</NavLink>
        </div>
      ) : (
        <div>
          <h1>Question</h1>

          <QuestionCardCommon question={question} user={user}>

            {isAnswered ? (
              <AnsweredContent question={question} />
            ) : (
              <UnansweredContent question={question} />
            )}

          </QuestionCardCommon>

        </div>
      )}

    </div>
  );
}

function mapStateToProps({ authenticatedUser, questions, users }, { match }) {
  const questionId = match.params.questionId;
  const question = questions[questionId];

  let user = null;
  let isAnswered = false;

  // Defensive programming in case the question for the ID doesn't exist
  if (question) {
    user = users[question.author];
    isAnswered = question.optionOne.votes.includes(authenticatedUser) || question.optionTwo.votes.includes(authenticatedUser);
  }

  return {
    question,
    user,
    isAnswered
  };
}

export default connect(mapStateToProps)(Question);
