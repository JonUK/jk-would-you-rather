import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Both answers are displayed with radio inputs ready for the question to be answered
 * @constructor
 */
class EditableContent extends Component {

  state = {
    selectedAnswer: 'optionOne' // Select the first option by default
  };

  changeAnswer = (event) => {
    this.setState({ selectedAnswer: event.target.value });
  };

  handleSendAnswer = () => {

    // Dispatch an action to update the question to include the answer and update the current user
    // to log that they answered this question.

    console.log('sendAnswer');
  };

  render() {

    return (
      <div>

        selectedAnswer: {this.state.selectedAnswer}

        <div className="question-card__answer-container">

          <label>
            <input
              type="radio"
              name="answer"
              value="optionOne"
              checked={this.state.selectedAnswer === 'optionOne'}
              onChange={this.changeAnswer}
              className="question-card__radio" />

            <strong className="question-card__answer-letter">A</strong>
            <span className="question-card__question">
            {this.props.question.optionOne.text}
          </span>
          </label>
        </div>

        <div className="question-card__answer-container">

          <label>
            <input
              type="radio"
              name="answer"
              value="optionTwo"
              checked={this.state.selectedAnswer === 'optionTwo'}
              onChange={this.changeAnswer}
              className="question-card__radio" />

            <strong className="question-card__answer-letter">B</strong>
            <span className="question-card__question">
            {this.props.question.optionTwo.text}
          </span>
          </label>
        </div>

        <footer className="question-card__footer">
          <button onClick={this.sendAnswer} className="button--primary">Submit Answer</button>
        </footer>
      </div>
    );
  }
}

EditableContent.propTypes = {
  question: PropTypes.object.isRequired
};

export default EditableContent;
