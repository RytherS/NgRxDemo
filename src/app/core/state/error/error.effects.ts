import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, of, switchMap, tap, withLatestFrom } from "rxjs";
import { Router } from "@angular/router";
import { ErrorActions, ErrorSelectors } from ".";
import { routerRequestAction } from "@ngrx/router-store";
import { Store } from "@ngrx/store";


@Injectable()
export class ErrorEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store
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

    // If an error previously occurred, but the user navigates away from the error screen, clear the error
    autoClearError$ = createEffect(() =>
        this.actions$.pipe(
            ofType(routerRequestAction),
            withLatestFrom(this.store.select(ErrorSelectors.getIsError)),
            filter(([routerAction, isError]) => isError && routerAction.payload.event.url != '/error'),
            switchMap(() => of(ErrorActions.clearError()))
        )
    );
}
