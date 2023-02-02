import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, exhaustMap, from, map, mergeMap, of, switchMap, tap} from "rxjs";
import {AuthService} from "../../_services/auth/auth.service";
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {
  userCheckLoggedIn$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(userActions.userCheckLoggedIn),
      exhaustMap(() =>
        from(this.authService.checkAuthState()).pipe(
          switchMap((data) => [
            userActions.userCheckLoggedInSuccess({user: data}),
          ]),
          catchError(err => of(userActions.userCheckLoggedInFailed({error: err}))
          )
        )
      )
    ));

  signInUser$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(userActions.userLogin),
      exhaustMap((payload) =>
        from(this.authService.signIn(payload.email, payload.password)).pipe(
          switchMap((data) => [
            userActions.userLoginSuccess({user: data.user}),
          ]),
          catchError(err => of(userActions.userLoginFailed({error: err}))
          )
        )
      )
    ));

  // signOutUser$ = createEffect((): any =>
  //   this.actions$.pipe(
  //     ofType(userActions.userLogout),
  //     exhaustMap(() =>
  //       from(this.authService.signOut()).pipe(
  //         switchMap(() => [
  //           userActions.userLogoutSuccess()
  //         ])
  //       )
  //     )
  //   ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
