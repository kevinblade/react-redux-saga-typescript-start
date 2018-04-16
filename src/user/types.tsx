interface LoginState {
  readonly id: string;
  readonly password: string;
  readonly isLoggedIn: boolean;
}

interface LogoutState {
  readonly id: string;
}

export type UserState = LoginState | LogoutState;

interface LoginAction {
  readonly type: string;
  readonly payload?: {
    readonly id: string;
    readonly password: string;
  };
}

interface LogoutAction {
  readonly type: string;
  readonly payload: {
    readonly id: string;
  };
}

export type UserAction = LoginAction | LogoutAction;
