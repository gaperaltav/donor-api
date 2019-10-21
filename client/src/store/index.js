import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composedEnhancer(
    applyMiddleware(thunk, logger),
  )
);

export default store;