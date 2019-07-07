export const RECEIVE_USERS = 'RECEIVE_USERS';

/**
 * @param {Object} users *
 * @returns {{type: string, users: *}}
 */
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}
