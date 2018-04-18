import { all, call } from 'redux-saga/effects';
import User from './user';

function* rootSagas() {
  console.log('Sagas.root');
  yield all([
    call(User.Sagas.watchLogin),
    call(User.Sagas.watchLoginSuccess),
    call(User.Sagas.watchLoginFailure),
    call(User.Sagas.watchLogout)
  ]);
}

export default rootSagas;
