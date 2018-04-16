import { History } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../rootReducers';
import rootSagas from '../rootSagas';

function configureStore(history: History) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    rootReducers,
    window.devToolsExtension && process.env.NODE_ENV !== 'production'
      ? compose(applyMiddleware(...middlewares), window.devToolsExtension())
      : applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(rootSagas);

  return store;
}

export default configureStore;
