import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

declare global {
  interface Window {
    devToolsExtension: any;
  }
}

export function configureStore(history: History) {
  // create a list for middlewares.
  const middlewares = [];

  // create a logger middleware for the redux logging in development mode.
  if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
  }

  // create a saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // append saga middleware into the middleware list
  middlewares.push(sagaMiddleware);
  // create and append router middleware into the middleware list
  middlewares.push(routerMiddleware(history));

  // apply middlewares in production mode or compose with devToolsExtension
  const enhancer =
    window.devToolsExtension && process.env.NODE_ENV !== 'production'
      ? compose(applyMiddleware(...middlewares), window.devToolsExtension())
      : applyMiddleware(...middlewares);

  // create a store with reducers and middlewares.
  const store = createStore(rootReducer, enhancer);

  // run saga middleware.
  sagaMiddleware.run(rootSaga);

  return store;
}
