import { RouterState } from 'react-router-redux';
import User from './user';

export interface GlobalState {
  user: User.Types.UserState;
  router: RouterState;
}
