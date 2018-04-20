import { take } from 'redux-saga/effects';
import * as Actions from './actions';
import * as Consts from './consts';

export function* watchLogin() {
  while (true) {
    const login: Actions.UserAction = yield take<Actions.UserAction>(Consts.LOGIN_REQUEST);
    console.log('watchLogin: login = ', login);
  }
}

export function* watchLoginSuccess() {
  while (true) {
    yield take<Actions.UserAction>(Consts.LOGIN_SUCCESS);
    console.log('watchLoginSuccess');
  }
}

export function* watchLoginFailure() {
  while (true) {
    yield take<Actions.UserAction>(Consts.LOGIN_FAILURE);
    console.log('watchLoginFailure');
  }
}

export function* watchLogout() {
  while (true) {
    yield take<Actions.UserAction>(Consts.LOGOUT_REQUEST);
    console.log('watchLogout');
  }
}
