import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';

import { historyMiddleware } from './history';

export const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(historyMiddleware)
);
