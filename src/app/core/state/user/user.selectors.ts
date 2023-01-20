import { createSelector } from "@ngrx/store";
import { getCoreState } from "../core.selectors";


const getUserState = createSelector(getCoreState, (coreState) => coreState.userState);

export const getUser = createSelector(
    getUserState,
    (userState) => userState.currentUser ?? null
);

export const getLoading = createSelector(
    getUserState,
    (userState) => userState.loading
);
