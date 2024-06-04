import { Action, createReducer, on } from '@ngrx/store';
import * as authAction from './mfe1.action';
import { Mfe1State, initMfe1State } from './mfe1.state';

const authReducer = createReducer(
  initMfe1State,
  on(authAction.updateIsMfe1, (state) => ({
    ...state,
    isLogin: state.isMfe1,
  }))
);

export function reducer(state: Mfe1State | undefined, action: Action) {
  return authReducer(state, action);
}
