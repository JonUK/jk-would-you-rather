import React from 'react';
import { connect } from 'react-redux';

import QuestionCardCommon from '../components/question-cards/QuestionCardCommon';
import SummaryContent from '../components/question-cards/SummaryContent';
import EditableContent from '../components/question-cards/EditableContent';

function Question(props) {

  const { question, user } = props;

  return (
    <div>
      <h1>Question</h1>
      <QuestionCardCommon question={question} user={user}>
        <EditableContent question={question} />
      </QuestionCardCommon>
    </div>
  );
}

function mapStateToProps({ questions, users }, { match }) {
  const questionId = match.params.questionId;
  const question = questions[questionId];
  const user = users[question.author];

  return {
    question,
    user,
    questionAnswered: false
  };
}

export default connect(mapStateToProps)(Question);
