import { RouterState } from 'react-router-redux';
import User from './user';

export interface GlobalState {
  user: User.States.UserState;
  router: RouterState;
}
