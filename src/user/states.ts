import { ResponseError } from '../api/services';

export interface UserState {
  id: string;
  password: string;
  isLoggedIn: boolean;
  error?: ResponseError;
}

export const initialUserState: UserState = {
  id: '',
  password: '',
  isLoggedIn: false
};
