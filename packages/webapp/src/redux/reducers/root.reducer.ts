// utils
import { combineReducers } from 'redux';

// reducers
import postsReducer from './post/post.reducer';

const rootReducer = combineReducers({ posts: postsReducer });

export default rootReducer;
