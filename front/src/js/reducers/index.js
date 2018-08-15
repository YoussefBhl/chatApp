import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { signup } from './signup.reducer';
import { posts } from './posts.reducer';
//import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  posts,
  signup
});

export default rootReducer;