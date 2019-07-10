import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Questions.css';

import QuestionCard from '../components/QuestionCard';

class Questions extends Component {

  state = {
    showAnswered: false // Toggle to flip between showing unanswered and answered questions
  };

  showAnswered = (value) => {
    this.setState({ showAnswered: value });
  };

  renderQuestions = (questions, users) => {
    return questions.map(question => {
      return (<QuestionCard key={question.id} question={question} user={users[question.author]} />);
    });
  };

  render() {
    return (
      <div>

        <h1>Questions</h1>

        <div className="questions__buttons-container">

          <button onClick={() => this.showAnswered(false)}
                  className={'questions__button' + (this.state.showAnswered ? '' : ' questions__button--active')}>
            Unanswered ({ this.props.unansweredQuestions.length })
          </button>

          <button onClick={() => this.showAnswered(true)}
                  className={'questions__button' + (this.state.showAnswered ? ' questions__button--active' : '')}>
            Answered ({ this.props.answeredQuestions.length })
          </button>

        </div>

        {!this.state.showAnswered && this.renderQuestions(this.props.unansweredQuestions, this.props.users)}

        {this.state.showAnswered && this.renderQuestions(this.props.answeredQuestions, this.props.users)}

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
