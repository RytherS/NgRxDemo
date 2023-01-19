import { createAction, props } from "@ngrx/store";
import { ErrorState } from "./error.state";

// This is simply a way for effects to correctly return an action without actually impacting state.
// The error reducer should not reference this action.
export const NO_ACTION = createAction(
    "[Error] No Action"
);

export const setError = createAction(
    "[Error] Set Error",
    props<{ error: ErrorState }>()
);

export const clearError = createAction(
    "[Error] Clear Error"
);
