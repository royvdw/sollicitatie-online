import { Action, createReducer, on } from '@ngrx/store';
import * as ExampleActions from '../actions/example.actions';

export interface State {
  value: string;
}

export const initialState: State = {
  value: ''
};

export const exampleReducer = createReducer(
  initialState,
  on(ExampleActions.exampleAction, (state, { example }) => ({ ...state, value: example }))
);
