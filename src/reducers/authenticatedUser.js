import { SET_AUTHENTICATED_USERNAME } from '../actions/authenticatedUser';

export default function authenticatedUser(state = null, action) {
  switch (action) {
    case SET_AUTHENTICATED_USERNAME:
      return action.username;
    default:
      return state;
  }
}
