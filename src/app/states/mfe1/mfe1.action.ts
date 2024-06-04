import { createAction, props } from '@ngrx/store';

export const updateIsMfe1 = createAction(
  '[Update Top Menu Page] Update Show Add New',
  props<{ isMfe1: boolean }>()
);
