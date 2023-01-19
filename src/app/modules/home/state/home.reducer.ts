import { createReducer, on } from "@ngrx/store";
import { initialHomeState } from "./home.state";
import * as HomeActions from "./home.actions";
import { UserActions } from "src/app/core/state/user";

export const homeReducer = createReducer(
    initialHomeState,
    on(
        HomeActions.homePageInitialized,
        UserActions.headerUserLoginClicked,
        (state) => {
        return { ...state, loading: true };
    }),

    on(HomeActions.feedsLoadSuccess, (state, actionData) => {
        return {
            ...state,
            loading: false,
            orgFeed: actionData.orgFeed,
            personalFeed: actionData.personalFeed
        }
    }),
    on(
        HomeActions.feedsLoadFailure,
        UserActions.userLoadFailure,
        (state) => {
        return {
            ...state,
            loading: false,
            orgFeed: [],
            personalFeed: []
        }
    })
);