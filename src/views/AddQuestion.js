import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import Spinner from '../components/Spinner';
import './AddQuestion.css';

class AddQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
    isSaving: false,
    showInputError: false
  };

  handleOptionOneChange = (event) => {
    this.setState({ optionOneText: event.target.value });
  };

  handleOptionTwoChange = (event) => {
    this.setState({ optionTwoText: event.target.value });
  };

  addQuestion = async () => {

    if (!this.state.optionOneText || !this.state.optionTwoText) {
      this.setState({ showInputError: true });
      return;
    }

    this.setState({ isSaving: true });
    await this.props.dispatch(handleAddQuestion(this.state.optionOneText, this.state.optionTwoText));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>

        <h1>Add Question</h1>

        <article className="panel">

          <header className="add-question__heading">
            Complete the form below to add a new question

            <h2>Would you rather&hellip;</h2>
          </header>

          <label>
            Option one<br />
            <input type="text" value={this.state.optionOneText} onChange={this.handleOptionOneChange} autoFocus />
          </label>

          <label>
            Option two<br />
            <input type="text" value={this.state.optionTwoText} onChange={this.handleOptionTwoChange} />
          </label>

          {this.state.showInputError &&
            <div role="alert" className="text-error">Please enter answers for both options before continuing</div>
          }

          <button onClick={this.addQuestion} className="button--primary">

            {this.state.isSaving ? (
              <Spinner isInline={true} />
            ) : (
              <span>Add Question</span>
            )}

          </button>

        </article>

      </div>
    );
  }



}

export default withRouter(connect()(AddQuestion));
