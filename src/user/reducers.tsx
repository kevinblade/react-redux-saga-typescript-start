import * as Consts from './consts';
import * as Types from './types';

export const userState: Types.UserState = {
  id: '',
  password: '',
  isLoggedIn: false
};

export const user = (state: Types.UserState = userState, action: Types.UserAction): Types.UserState | undefined => {
  switch (action.type) {
    case Consts.LOGIN:
      return { ...state, ...action.payload };
    case Consts.LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true };
    case Consts.LOGIN_FAILURE:
      return undefined;
    case Consts.LOGOUT:
      return { ...state, password: '', isLoggedIn: false };
    default:
      return state;
  }
};
