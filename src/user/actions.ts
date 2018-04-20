import * as Consts from './consts';
import { ResponseError } from '../api/services';

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
  error: ResponseError;
}

export interface LogoutRequest {
  type: 'LOGOUT_REQUEST';
}

export type UserAction = LoginRequest | LoginSuccess | LoginFailure | LogoutRequest;

export const loginRequest = (id: string, password: string): LoginRequest => ({
  type: Consts.LOGIN_REQUEST,
  id,
  password
});

export const loginSuccess = (): LoginSuccess => ({
  type: Consts.LOGIN_SUCCESS
});

export const loginFailure = (error: ResponseError): LoginFailure => ({
  type: Consts.LOGIN_FAILURE,
  error
});

export const logoutRequest = (): LogoutRequest => ({
  type: Consts.LOGOUT_REQUEST
});
