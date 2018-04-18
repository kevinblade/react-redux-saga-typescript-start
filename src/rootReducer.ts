import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { GlobalState } from './globalState';
import userReducer from './user/reducer';

export default combineReducers<GlobalState>({ user: userReducer, router: routerReducer });
