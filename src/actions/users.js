export const RECEIVE_USERS = 'RECEIVE_USERS';

// Action creator function
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  };
}