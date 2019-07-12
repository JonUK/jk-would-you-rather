import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleAnswerQuestion } from '../../actions/questions';
import Spinner from '../Spinner';

/**
 * Both answers are displayed with radio inputs ready for the question to be answered
 * @constructor
 */
class EditableContent extends Component {

  state = {
    selectedAnswer: 'optionOne', // Select the first option by default
    isSaving: false
  };

  changeAnswer = (event) => {
    this.setState({ selectedAnswer: event.target.value });
  };

  sendAnswer = async () => {

    this.setState({ isSaving: true });

    await this.props.dispatch(handleAnswerQuestion(
      this.props.question.id,
      this.state.selectedAnswer));

    this.props.history.push('/');
  };

  render() {

    return (
      <div>

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
          <button onClick={this.sendAnswer} className="button--primary">

            {this.state.isSaving ? (
              <Spinner isInline={true}/>
            ) : (
              <span>Submit Answer</span>
            )}

          </button>
        </footer>
      </div>
    );
  }
}

EditableContent.propTypes = {
  question: PropTypes.object.isRequired
};

export default withRouter(connect()(EditableContent));
