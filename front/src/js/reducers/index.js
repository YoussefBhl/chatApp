import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { signup } from './signup.reducer';
//import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  signup
});

export default rootReducer;