import { RouterState } from 'react-router-redux';
import App from './app';
import User from './user';

export interface GlobalState {
  app: App.States.AppState;
  user: User.States.UserState;
  router: RouterState;
}
