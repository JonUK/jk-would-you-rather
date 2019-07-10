import React from 'react';
import { connect } from 'react-redux';

import QuestionCard from '../components/QuestionCard';

function Question(props) {

  const { question, user, match } = props;

  return (
    <div>
      <h1>Question</h1>
      <QuestionCard question={question} user={user} />
    </div>
  );
}

function mapStateToProps({ questions, users }, { match }) {
  const questionId = match.params.questionId;
  const question = questions[questionId];
  const user = users[question.author];

  return {
    question,
    user
  };
}

export default connect(mapStateToProps)(Question);
