import { createAction, props } from '@ngrx/store';

// Check user logged in
export const userCheckLoggedIn = createAction('[User] Check logged in');
export const userCheckLoggedInSuccess = createAction('[User] Check logged in - SUCCESS', props<{ user: any }>());
export const userCheckLoggedInFailed = createAction('[User] Check logged in - FAILED', props<{ error: any }>());

// User login actions
export const userLogin = createAction('[User] Login', props<{ email: string, password: string }>());
export const userLoginSuccess = createAction('[User] Login - SUCCESS', props<{ user: any }>());
export const userLoginFailed = createAction('[User] Login - FAILED', props<{ error: any }>());

// User logout actions
export const userLogout = createAction('[User] Logout');
export const userLogoutSuccess = createAction('[User] Logout - SUCCESS');
