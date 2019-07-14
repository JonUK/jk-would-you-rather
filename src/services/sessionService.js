const authenticatedUsernameKey = 'authenticated-username';

class SessionService {

  /**
   * Attempt to retrieve the authenticated username for this user's session
   * @returns {string}
   */
  static getAuthenticatedUsername() {
    return sessionStorage.getItem(authenticatedUsernameKey);
  }

  /**
   * Sets the authenticated username for this user's session
   * @param username
   */
  static setAuthenticatedUsername(username) {
    sessionStorage.setItem(authenticatedUsernameKey, username);
  }

  /**
   * Clear the authenticated username
   */
  static clearAuthenticatedUsername() {
    sessionStorage.removeItem(authenticatedUsernameKey);
  }
}

export default SessionService;
