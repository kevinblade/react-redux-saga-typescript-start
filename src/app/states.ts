export interface AppState {}

export const initialAppState: AppState = {};

export default function reducer(state: AppState = initialAppState, action: any): AppState {
  switch (action.type) {
    default:
      return state;
  }
}
