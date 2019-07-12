export const SET_AUTHENTICATED_USERNAME = 'SET_AUTHENTICATED_USERNAME';
export const CLEAR_AUTHENTICATED_USERNAME = 'CLEAR_AUTHENTICATED_USERNAME';

/**
 * @param {string} username
 * @returns {{type: string, username: *}}
 */
export function setAuthenticatedUsername(username) {
  return {
    type: SET_AUTHENTICATED_USERNAME,
    username
  };
}

export function clearAuthenticatedUsername() {
  return {
    type: CLEAR_AUTHENTICATED_USERNAME
  };
}
