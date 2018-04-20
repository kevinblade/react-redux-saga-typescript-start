import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import App from './app';
import { GlobalState } from './globalState';
import User from './user';

export default combineReducers<GlobalState>({
  app: App.Reducer.default,
  router: routerReducer,
  user: User.Reducer.default
});
