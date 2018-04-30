import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
//import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users
});

export default rootReducer;