import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, tap } from "rxjs";
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
            // We only want to route when the error specifies to, so we can filter out all the ones that don't. No if statement needed!
            filter((action) => action.error.routeToErrorPage),
            tap((_) => this.router.navigate(["/error"]))
        ),
        { dispatch: false }
    );
}
