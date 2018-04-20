import * as Actions from './actions';
import * as Consts from './consts';
import * as States from './states';

export default function reducer(
  state: States.UserState = States.initialUserState,
  action: Actions.UserAction
): States.UserState {
  switch (action.type) {
    case Consts.LOGIN_REQUEST:
      return { ...state, id: action.id, password: action.password };
    case Consts.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case Consts.LOGIN_FAILURE:
      return { ...state, error: action.error };
    case Consts.LOGOUT_REQUEST:
      return States.initialUserState;
    default:
      return state;
  }
}
