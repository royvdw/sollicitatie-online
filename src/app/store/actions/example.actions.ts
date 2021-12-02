import { createAction, props } from '@ngrx/store';

export const exampleAction = createAction(
  '[Example] Action',
  props<{ example: 'string' }>()
);
