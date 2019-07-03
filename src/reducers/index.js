import { combineReducers } from 'redux';
import authenticatedUser from './authenticatedUser';
import users from './users';

export default combineReducers({
  authenticatedUser,
  users
});
