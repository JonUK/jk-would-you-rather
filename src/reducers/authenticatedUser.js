import {
  SET_AUTHENTICATED_USERNAME,
  CLEAR_AUTHENTICATED_USERNAME
} from '../actions/authenticatedUser';

export default function authenticatedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHENTICATED_USERNAME:
      return action.username;
    case CLEAR_AUTHENTICATED_USERNAME:
      return null;
    default:
      return state;
  }
}
