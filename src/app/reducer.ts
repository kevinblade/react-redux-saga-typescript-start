import * as States from './states';

export default function reducer(state: States.AppState = States.initialAppState, action: any): States.AppState {
  switch (action.type) {
    default:
      return state;
  }
}
