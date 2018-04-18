import User from './';

export default function reducer(
  state: User.States.UserState = User.States.initialUserState,
  action: User.Actions.UserAction
): User.States.UserState {
  switch (action.type) {
    case User.Consts.LOGIN_REQUEST:
      return { ...state, id: action.id, password: action.password };
    case User.Consts.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case User.Consts.LOGIN_FAILURE:
      return { ...state, error: action.error };
    case User.Consts.LOGOUT_REQUEST:
      return User.States.initialUserState;
    default:
      return state;
  }
}
