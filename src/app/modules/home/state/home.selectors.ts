import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomeState, HOME_FEATURE_KEY } from "./home.state";

export const getHomeState = createFeatureSelector<HomeState>(HOME_FEATURE_KEY);

export const getLoading = createSelector(
    getHomeState,
    (homeState) => homeState.loading
);

export const getPersonalFeed = createSelector(
    getHomeState,
    (homeState) => homeState.personalFeed
);

export const getOrgFeed = createSelector(
    getHomeState,
    (homeState) => homeState.orgFeed
);
