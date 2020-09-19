import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import write from './write';
import users from './users';

export default combineReducers({
  alert,
  auth,
  write,
  users,
});
