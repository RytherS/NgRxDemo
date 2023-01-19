import { initialErrorState } from "./error.state";
import { createReducer, on } from "@ngrx/store";
import { ErrorActions } from ".";


export const errorReducer = createReducer(
    initialErrorState,
    on(
        ErrorActions.setError,
        (_, { error }) => {
            return { ...error };
        }
    ),

    on(
        ErrorActions.clearError,
        (_) => { 
            return {...initialErrorState}
        }
    )
);