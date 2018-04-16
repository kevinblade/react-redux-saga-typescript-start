import * as Consts from './consts';
import * as Types from './types';

export const login = (id: string, password: string): Types.UserAction => {
  return {
    type: Consts.LOGIN,
    payload: { id, password }
  };
};

export const loginSuccess = (): Types.UserAction => {
  return {
    type: Consts.LOGIN_SUCCESS
  };
};

export const logout = (id: string): Types.UserAction => {
  return {
    type: Consts.LOGOUT,
    payload: { id }
  };
};
