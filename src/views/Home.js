import React from 'react';
import { connect } from 'react-redux';

import QuestionSummary from '../components/QuestionSummary';

function Home(props) {

  function renderQuestions(questions, users) {

    return Object.keys(questions).map(key => {
      const question = questions[key];
      const user = users[question.author];

      return (<QuestionSummary key={key} question={question} user={user} />);
    });
  }

  return (
    <div>

      <h1>Questions</h1>

      {renderQuestions(props.questions, props.users)}

    </div>
  );
}

function mapStateToProps({ questions, users }) {
  return {
    questions,
    users
  };
}

export default connect(mapStateToProps)(Home);
