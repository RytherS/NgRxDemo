import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { UserService } from "../../services";
import { ErrorActions } from "../error";
import { UserActions } from ".";


@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store,
        private userService: UserService
    ) { }

    loadCurrentUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.loginPageUserLoginClicked, UserActions.headerUserLoginClicked),
            switchMap(() => {
                return this.userService.getCurrentUser().pipe(
                    map((user) => {
                        return UserActions.userLoadSuccess({ user });
                    }),
                    catchError((error) => {
                        return of(UserActions.userLoadFailure({ error }));
                    })
                );
            })
        )
    });

    routeUserToHome$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.userLoadSuccess),
            tap(() => this.router.navigate(['/home']))
        ),
        { dispatch: false }
    );

    throwUserLoadError$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.userLoadFailure),
            switchMap((action) => {
                return of(ErrorActions.setError({ 
                    error: {
                        isError: true,
                        source: "Login",
                        message: "There was an error logging in. Please try again later.",
                        data: action.error
                    }
                }))
            })
        )
    });
}
