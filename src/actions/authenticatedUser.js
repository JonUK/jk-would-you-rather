export const SET_AUTHENTICATED_USERNAME = 'SET_AUTHENTICATED_USERNAME';

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
