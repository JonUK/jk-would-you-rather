export const SET_AUTHENTICATED_USERNAME = 'SET_AUTHENTICATED_USERNAME';

// Action creator function
export function setAuthenticatedUsername(username) {
  return {
    type: SET_AUTHENTICATED_USERNAME,
    username
  };
}
