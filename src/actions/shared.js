import { _getUsers, _getQuestions } from '../data/_data';
import { setAuthenticatedUsername } from './authenticatedUser';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

/**
 * Gets all the users async and then sets them in the store
 * @returns {function(*): Promise<T | never>}
 */
export function handlePreLoginData() {
  return dispatch => {
    return _getUsers()
      .then(users => {
        dispatch(receiveUsers(users));
      });
  };
}

/**
 * Sets the authenticated username in state, retrieves all the questions and then
 * populates these in the state too.
 * @param {string} username
 * @returns {function(*): Promise<T | never>}
 */
export function handlePostLoginData(username) {
  return dispatch => {
    dispatch(setAuthenticatedUsername(username));

    return _getQuestions()
      .then(questions => {
        dispatch(receiveQuestions(questions));
      });
  };
}





