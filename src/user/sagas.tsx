import { take } from 'redux-saga/effects';
import User from '../user';

export function* watchLogin() {
  while (true) {
    const login: User.Types.UserAction = yield take<User.Types.UserAction>(User.Consts.LOGIN);
    console.log('watchLogin: login = ', login);
  }
}

export function* watchLoginSuccess() {
  while (true) {
    yield take<User.Types.UserAction>(User.Consts.LOGIN_SUCCESS);
    console.log('watchLoginSuccess');
  }
}

export function* watchLoginFailure() {
  while (true) {
    yield take<User.Types.UserAction>(User.Consts.LOGIN_FAILURE);
    console.log('watchLoginFailure');
  }
}

export function* watchLogout() {
  while (true) {
    yield take<User.Types.UserAction>(User.Consts.LOGOUT);
    console.log('watchLogout');
  }
}
