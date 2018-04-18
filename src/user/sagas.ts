import { take } from 'redux-saga/effects';
import User from './';

export function* watchLogin() {
  while (true) {
    const login: User.Actions.UserAction = yield take<User.Actions.UserAction>(User.Consts.LOGIN_REQUEST);
    console.log('watchLogin: login = ', login);
  }
}

export function* watchLoginSuccess() {
  while (true) {
    yield take<User.Actions.UserAction>(User.Consts.LOGIN_SUCCESS);
    console.log('watchLoginSuccess');
  }
}

export function* watchLoginFailure() {
  while (true) {
    yield take<User.Actions.UserAction>(User.Consts.LOGIN_FAILURE);
    console.log('watchLoginFailure');
  }
}

export function* watchLogout() {
  while (true) {
    yield take<User.Actions.UserAction>(User.Consts.LOGOUT_REQUEST);
    console.log('watchLogout');
  }
}
