import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap } from "rxjs";
import { Router } from "@angular/router";
import { ErrorActions } from ".";

@Injectable()
export class ErrorEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) { }

    routeToErrorScreen$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ErrorActions.setError),
            switchMap(() => {
                return of(this.router.navigate([["/error"]])).pipe(
                    map(() => ErrorActions.NO_ACTION())
                );
            })
        )
    });
}
