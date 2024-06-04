import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Mfe1State } from './mfe1.state';

export const selectMfe1 = createFeatureSelector<Mfe1State>('mfe1');

export const selectIsMfe1 = createSelector(selectMfe1, (state) => state.isMfe1);
