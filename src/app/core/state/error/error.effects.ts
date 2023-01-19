import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { Router } from "@angular/router";
import { ErrorActions } from ".";


@Injectable()
export class ErrorEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) { }

    routeToErrorScreen$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ErrorActions.setError),
            tap(() => this.router.navigate([["/error"]]))
        ),
        { dispatch: false }
    );
}
