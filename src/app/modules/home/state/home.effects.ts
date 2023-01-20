import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, withLatestFrom, zip } from "rxjs";
import { DataService } from "../../../core/services";
import { ErrorActions } from "src/app/core/state/error";
import { ErrorState } from "src/app/core/state/error/error.state";
import { HomeActions, HomeSelectors } from ".";
import { UserActions, UserSelectors } from "src/app/core/state/user";

@Injectable()
export class HomeEffects {
    constructor(
        private actions$: Actions,
        private store: Store,
        private dataService: DataService
    ) { }

    loadFeeds$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.homePageInitialized),
            // Depending on whether a user is logged in or not, we need to grab different data.
            // We can check that by grabbing the currently cached user with "withLatestFrom"
            withLatestFrom(this.store.select(UserSelectors.getUser)),
            switchMap(([_, user]) => {
                if (user) {
                    // A user is logged in! Grab their personal feed too.
                    // Could create two different sets of actions and effects, but makes sense here to batch them into one!
                    return zip(
                        this.dataService.getOrgData(),
                        this.dataService.getPersonalData()
                    ).pipe(
                        map(([orgFeed, personalFeed]) => HomeActions.feedsLoadSuccess({ orgFeed, personalFeed })),
                        catchError(error => of(HomeActions.feedsLoadFailure({ error })))
                    );
                }
                else {
                    // Users can use the site without being logged in, they just won't have a personalized feed.
                    // Grab just the org feed.
                    return this.dataService.getOrgData().pipe(
                        map(orgFeed => HomeActions.feedsLoadSuccess({ orgFeed, personalFeed: [] })),
                        catchError(error => of(HomeActions.feedsLoadFailure({ error })))
                    )
                }

            })
        )
    });

    // If a user logs in from the header while on the page, we want to reload the personal feed
    loadUserFeed$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserActions.userLoadSuccess),
            /*
                Since we're already on the home page, the orgFeed should already be loaded.
                So, no need to make another API call, just use the cached feed using "withLatestFrom" like we do for the user above!
                (Could also make specific actions for each feed loading to handle separately, which is probably the correct/'pure' ngrx way, 
                but for this is for the sake of example)
            */
            withLatestFrom(this.store.select(HomeSelectors.getOrgFeed)),
            switchMap(([user, storedOrgFeed]) => 
                this.dataService.getPersonalData().pipe(
                    map(personalFeed => HomeActions.feedsLoadSuccess({ orgFeed: storedOrgFeed, personalFeed })),
                    catchError(error => of(HomeActions.feedsLoadFailure({ error })))
                )
            )
        )
    });

    handleFeedsLoadError$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(HomeActions.feedsLoadFailure),
            switchMap((errorAction) => of(ErrorActions.setError({
                error: <ErrorState>{
                    isError: true,
                    source: "DataService",
                    message: "Failed to load feed(s).",
                    routeToErrorPage: true,
                    data: errorAction.error
                }
            })))
        )
    });
}