
import { combineReducers } from 'redux'

import authReducer from 'reducers/authReducer'
import loadingReducer from 'reducers/loadingReducer'
import userReducer from 'reducers/userReducer'
import postsReducer from 'reducers/postsReducer'

export default combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  user: userReducer,
  posts: postsReducer,
});