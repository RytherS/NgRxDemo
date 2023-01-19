import { createSelector } from "@ngrx/store";
import { getCoreState } from "../core.selectors";

const getErrorState = createSelector(getCoreState, (coreState) => coreState.errorState);

export const getErrorMessage = createSelector(
    getErrorState,
    (errorState) => errorState.message
);

export const getErrorSource = createSelector(
    getErrorState,
    (errorState) => errorState.source
);
