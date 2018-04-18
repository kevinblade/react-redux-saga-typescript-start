import User from './';

export interface LoginRequest {
  type: 'LOGIN_REQUEST';
  id: string;
  password: string;
}

export interface LoginSuccess {
  type: 'LOGIN_SUCCESS';
}

export interface LoginFailure {
  type: 'LOGIN_FAILURE';
  error: string;
}

export interface LogoutRequest {
  type: 'LOGOUT_REQUEST';
}

export type UserAction = LoginRequest | LoginSuccess | LoginFailure | LogoutRequest;

export const loginRequest = (id: string, password: string): LoginRequest => ({
  type: User.Consts.LOGIN_REQUEST,
  id,
  password
});

export const loginSuccess = (): LoginSuccess => ({
  type: User.Consts.LOGIN_SUCCESS
});

export const loginFailure = (error: string): LoginFailure => ({
  type: User.Consts.LOGIN_FAILURE,
  error
});

export const logoutRequest = (): LogoutRequest => ({
  type: User.Consts.LOGOUT_REQUEST
});
