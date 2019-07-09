import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Questions.css';

import QuestionSummary from '../components/QuestionSummary';

class Questions extends Component {

  state = {
    showAnsweredQuestions: false // Toggle to flip between showing unanswered and answered questions
  };

  showUnanswered = () => {
    this.setState({ showAnsweredQuestions: false });
  };

  showAnswered = () => {
    this.setState({ showAnsweredQuestions: true });
  };

  renderQuestions = (questions, users) => {
    return questions.map(question => {
      return (<QuestionSummary key={question.id} question={question} user={users[question.author]} />);
    });
  };

  render() {
    return (
      <div>

        <h1>Questions</h1>

        <div class="questions__buttons-container">

          <button onClick={this.showUnanswered}
                  className={'questions__button' + (this.state.showAnsweredQuestions ? '' : ' questions__button--active')}>
            Unanswered ({ this.props.unansweredQuestions.length })
          </button>

          <button onClick={this.showAnswered}
                  className={'questions__button' + (this.state.showAnsweredQuestions ? ' questions__button--active' : '')}>
            Answered ({ this.props.answeredQuestions.length })
          </button>

        </div>

        {!this.state.showAnsweredQuestions && this.renderQuestions(this.props.unansweredQuestions, this.props.users)}

        {this.state.showAnsweredQuestions && this.renderQuestions(this.props.answeredQuestions, this.props.users)}

      </div>
    );
  }
}

function mapStateToProps({ authenticatedUser, questions, users }) {

  const answeredQuestions = [];
  const unansweredQuestions = [];

  Object.keys(questions).forEach(key => {
    const question = questions[key];
    const answered = question.optionOne.votes.includes(authenticatedUser) || question.optionTwo.votes.includes(authenticatedUser);

    if (answered) {
      answeredQuestions.push(question);
    } else {
      unansweredQuestions.push(question);
    }
  });

  return {
    answeredQuestions,
    unansweredQuestions,
    users
  };
}

export default connect(mapStateToProps)(Questions);
