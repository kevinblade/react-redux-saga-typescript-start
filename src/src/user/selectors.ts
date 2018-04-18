import { GlobalState } from '../globalState';
import { ResponseError } from '../api/services';

export const getUserId = (state: GlobalState): string => state.user.id;
export const getError = (state: GlobalState): ResponseError | undefined => state.user.error;
