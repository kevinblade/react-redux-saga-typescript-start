import { Action } from 'redux';
import { put } from 'redux-saga/effects';

import User from '../user';

export async function loginRequest(id: string, password: string): Promise<string> {
  try {
    return id;
  } catch (err) {
    throw new Error(`Error occurred downstream: ${err}`);
  }
}

export interface ResponseError extends Error {
  response?: Response;
}

export function* handleApiError(error: ResponseError, failureAction: (error?: ResponseError) => Action) {
  const response = error.response;

  if (response !== undefined) {
    if (response.status === 401) {
      // Unauthorised - show login
      yield put(failureAction());
      yield put(User.Actions.logoutRequest());
    }
  } else {
    yield put(failureAction(error));
  }
}
