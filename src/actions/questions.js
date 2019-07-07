export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

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
