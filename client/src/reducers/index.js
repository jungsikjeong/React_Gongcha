import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import write from './write';

export default combineReducers({
  alert,
  auth,
  write,
});
