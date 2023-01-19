import { createAction, props } from "@ngrx/store";
import { ErrorState } from "./error.state";


export const setError = createAction(
    "[Error] Set Error",
    props<{ error: ErrorState }>()
);

export const clearError = createAction(
    "[Error] Clear Error"
);
