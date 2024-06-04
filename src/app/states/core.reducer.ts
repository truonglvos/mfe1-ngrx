import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State } from './core.state';
import * as mfe1Reducer from './mfe1/mfe1.reducer';

export const reducers: ActionReducerMap<State> = {
  mfe1: mfe1Reducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
