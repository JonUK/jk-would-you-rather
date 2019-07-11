import { _saveQuestionAnswer } from '../data/_data';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

/**
 * @param {Object} questions
 * @returns {{questions: *, type: string}}
 */
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function handleAnswerQuestion(questionId, answer) {
  return (dispatch) => {
    // dispatch -- Call action creator

    // TODO: Get authenticated user

    //_saveQuestionAnswer()


  }


}
