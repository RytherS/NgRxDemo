import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { HomeState, HomeVM, initialHomeState } from '../models';
import { DataService } from 'src/app/core/services';
import { Observable, Subscription, combineLatest, switchMap, tap, withLatestFrom, zip } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserSelectors } from 'src/app/core/state/user';
import { ErrorActions } from 'src/app/core/state/error';
import { ErrorState } from 'src/app/core/state/error/error.state';
import { DataModel, User } from 'src/app/core/models';


@Injectable()
export class HomeStateService extends ComponentStore<HomeState> {

    public readonly loading$: Observable<boolean> = this.select(state => state.loading);
    public readonly orgFeed$: Observable<DataModel[]> = this.select(state => state.orgFeed);
    public readonly personalFeed$: Observable<DataModel[]> = this.select(state => state.personalFeed);

    // When the HomeComponent subscribes to this observable,
    // it will be automatically updated when *any* of the below sources change/emit a new value
    public readonly homeVm$: Observable<HomeVM> = this.select(
        this.loading$,
        this.orgFeed$,
        this.personalFeed$,
        this.globalStore.select(UserSelectors.getUser),
        (loading, orgFeed, personalFeed, currentUser) => <HomeVM>{ loading, orgFeed, personalFeed, currentUser }
    );

    private currentUser$!: Subscription;
    private currentUser: User | null = null;

    constructor(
        private dataService: DataService,
        private globalStore: Store, // This is the "regular" ngrx/store that is being used for more global state
    ) {
        super(initialHomeState);

        this.currentUser$ = combineLatest([
            this.globalStore.select(UserSelectors.getLoading),
            this.globalStore.select(UserSelectors.getUser)
        ]).pipe(
            tap(([userIsLoading, user]) => {
                // If the user is currently loading, set loading to true to provide UI feedback
                // (Could also hook this directly into the 'loading$' selector above)
                this.patchState({ loading: userIsLoading });

                // Reload feeds if the user has changed (i.e. logged in or out)
                if(this.currentUser !== user) {
                    this.loadFeeds();
                }
                this.currentUser = user;
            })
        ).subscribe();
    }

    override ngOnDestroy(): void {
        super.ngOnDestroy();
        this.currentUser$.unsubscribe();
    }

    public readonly loadFeeds = this.effect<void>(
        (source) => source.pipe(
            tap(() => this.patchState({ loading: true })), // Set loading in state to true so UI can react
            // Depending on whether a user is logged in or not, we need to grab different data.
            // We can check that by grabbing the currently cached user with "withLatestFrom"
            withLatestFrom(this.globalStore.select(UserSelectors.getUser)),
            switchMap(([_, user]) => {
                if (user) {
                    // A user is logged in! Grab their personal feed too.
                    // Could create two different sets of actions and effects, but makes sense here to batch them into one!
                    return zip(
                        this.dataService.getOrgData(),
                        this.dataService.getPersonalData()
                    ).pipe(
                        tapResponse(
                            ([orgFeed, personalFeed]) => this.patchState({ orgFeed, personalFeed, loading: false }),
                            (error) => this.handleLoadFeedsError(error)
                        )
                    )
                }
                else {
                    // Users can use the site without being logged in, they just won't have a personalized feed.
                    // Grab just the org feed.
                    return this.dataService.getOrgData().pipe(
                        tapResponse(
                            (orgFeed) => this.patchState({ orgFeed, personalFeed: [], loading: false }),
                            (error) => this.handleLoadFeedsError(error)
                        )
                    )
                }
            })
        )
    );

    private handleLoadFeedsError(error: any): void {
        this.setState(initialHomeState);
        this.globalStore.dispatch(ErrorActions.setError({
            error: <ErrorState>{
                isError: true,
                source: "DataService",
                message: "Failed to load feed(s).",
                routeToErrorPage: true,
                data: error
            }
        }));
    }
}
