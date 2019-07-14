import React from 'react';
import { connect } from 'react-redux';

import QuestionCardCommon from '../components/question-cards/QuestionCardCommon';
import UnansweredContent from '../components/question-cards/UnansweredContent';
import AnsweredContent from '../components/question-cards/AnsweredContent';

function Question(props) {

  const { question, user, isAnswered } = props;

  return (
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
  );
}

function mapStateToProps({ authenticatedUser, questions, users }, { match }) {
  const questionId = match.params.questionId;
  const question = questions[questionId];
  const user = users[question.author];
  const isAnswered = question.optionOne.votes.includes(authenticatedUser) || question.optionTwo.votes.includes(authenticatedUser);

  return {
    question,
    user,
    isAnswered
  };
}

export default connect(mapStateToProps)(Question);
