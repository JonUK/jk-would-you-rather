import { _getUsers } from '../data/_data';
import { receiveUsers } from './users';

export function handleLoginData() {
  return (dispatch) => {
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users));
      });
  };
}



