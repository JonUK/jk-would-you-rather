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

/**
 * @param {Object} answerObject
 * @return {{answerObject: *, type: string}}
 */
export function answerQuestion(answerObject) {
  return {
    type: ANSWER_QUESTION,
    answerObject
  }
}

/**
 * Update the Redux state and save the answer data
 * @param {string} questionId
 * @param {string} answer
 * @return {function(*, *): (*|Promise|Promise<any>)}
 */
export function handleAnswerQuestion(questionId, answer) {
  return (dispatch, getState) => {

    const { authenticatedUser } = getState();

    const answerObject = {
      authedUser: authenticatedUser,
      qid: questionId,
      answer: answer
    };

    dispatch(answerQuestion(answerObject));
    return _saveQuestionAnswer(answerObject);
  }
}
