import { combineReducers } from 'redux';
import donations from './donation';
import session from './session';

export default combineReducers({
  donations,
  session,
});