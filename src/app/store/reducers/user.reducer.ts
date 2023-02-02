import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface State {
  user?: any;
}

export const initialState: State = {};

export const userReducer = createReducer(
  initialState,
  on(UserActions.userLoginSuccess, (state, { user }) => ({ ...state, user })),
  on(UserActions.userCheckLoggedInSuccess, (state, { user }) => ({ ...state, user })),
  on(UserActions.userLogoutSuccess, (state) => ({ ...state, user: null })),
);
