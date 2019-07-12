import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION
} from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case ANSWER_QUESTION:
      const { authedUser, qid, answer } = action.answerObject;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authedUser)
          }
        }
      };
    case ADD_QUESTION:
      const { id, author, optionOne, optionTwo, timestamp } = action.responseObject;

      return {
        ...state,
        [id]: {
          id: id,
          author: author,
          timestamp: timestamp,
          optionOne: optionOne,
          optionTwo: optionTwo
        }
      };

    default:
      return state;
  }
}
