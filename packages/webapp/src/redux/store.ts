// utils:
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

// root reducer:
import rootReducer from './reducers/root.reducer';

// middlewares:
const meddleWares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...meddleWares));

export default store;
