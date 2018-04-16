import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import User from './user';

const rootReducers = combineReducers({ user: User.Reducers.user, router: routerReducer });

export default rootReducers;
